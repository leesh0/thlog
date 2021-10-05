from rest_framework.generics import *
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from django.db.models import Q, Count, Max
from thlog_auth.serializers import SimpleThlogUserSerializer
from thlog.features.thread.serializers import ThreadSerializer
from thlog.features.search.serializers import KeywordSerializer
from thlog.pagination import ThlogPagination
from thlog.permissions import *
from rest_framework.permissions import *
import datetime

User = get_user_model()


def get_from_date(days=1):
    return datetime.datetime.now() - datetime.timedelta(days=days)


class KeywordSearchView(ListAPIView):
    serializer_class = KeywordSerializer
    pagination_class = ThlogPagination
    permission_classes = [AllowAny]

    def get_queryset(self):
        source = self.request.query_params.get('source')
        search_q = self.request.query_params.get('q')
        order = self.request.query_params.get('order')
        trending = self.request.query_params.get('trending')
        now = datetime.datetime.now()

        thread_filters = None
        if search_q:
            thread_filters = Q(sv=search_q) | Q(sv__icontains=search_q) | Q(topics__name__in=[search_q])
            user_filters = Q(sv=search_q) | Q(sv__icontains=search_q)

        if order == 'daily':
            date_range = [get_from_date(1), now]
        elif order == 'week':
            date_range = [get_from_date(7), now]
        elif order == 'month':
            date_range = [get_from_date(30), now]
        else:
            date_range = None

        if date_range and thread_filters:
            thread_filters &= Q(created_at__range=date_range)
        elif date_range:
            thread_filters = Q(created_at__range=date_range)

        if thread_filters:
            threads = Thread.objects.filter(thread_filters).distinct().annotate(
                updated_at=Max('comments__updated_at')).order_by('updated_at')
        else:
            threads = Thread.objects.annotate(updated_at=Max('comments__updated_at')).order_by('updated_at')

        if source == 'user' and search_q:
            users = User.objects.filter(user_filters).distinct().order_by('-followers')

        if bool(trending):
            threads.annotate(like_count=Count('likes')).order_by('-like_count')
        if source == 'user':
            return users
        else:
            return threads

    def get_serializer_context(self):
        source = self.request.query_params.get('source')
        context = super().get_serializer_context()
        context.update({'type': source if source == 'user' else 'thread'})
        return context


class TopicSearchView(ListAPIView):
    serializer_class = ThreadSerializer
    queryset = Thread.objects.all()
    permission_classes = [AllowAny]

    def get_queryset(self):
        topic_q = self.request.query_params.get('q')
        return self.queryset.filter(topics__name__in=[topic_q]).distinct()


class HotTopicView(GenericAPIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        date_range = [get_from_date(30), datetime.datetime.now()]
        limit = request.query_params.get('limit')
        topics_limit = int(limit) if limit else None
        tags = [tag.name for tag in Thread.topics.annotate(cnt=Count('thread')).filter(
            thread__created_at__range=date_range).order_by('-cnt')[:topics_limit]]

        return Response(tags)
