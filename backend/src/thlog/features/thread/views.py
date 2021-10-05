from rest_framework.generics import *
from rest_framework.views import *
from rest_framework.permissions import *
from rest_framework.status import *
from django.db.models import Max
from django.contrib.auth import get_user_model
from thlog.permissions import *
from thlog.features.thread.serializers import *
from thlog.models import *
from thlog.pagination import ThlogPagination

User = get_user_model()


class ThreadListCreateView(ListCreateAPIView):
    serializer_class = ThreadSerializer
    queryset = Thread.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    pagination_class = ThlogPagination

    def get_queryset(self):
        return self.queryset.annotate(updated_at=Max("comments__updated_at")).order_by('updated_at')

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ThreadDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadViewSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user = self.kwargs.get('username')
        thread_id = self.kwargs.get('pk')
        return self.queryset.filter(id=thread_id)


class ThreadLikeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, username, pk):
        thread_like = ThreadLike.objects.filter(thread_id=pk, user=request.user)
        if thread_like.exists():
            thread_like.delete()
            count = ThreadLike.objects.filter(thread_id=pk).count()
            return Response({'like': count}, status=HTTP_200_OK)
        else:
            ThreadLike(thread_id=pk, user=request.user).save()
            count = ThreadLike.objects.filter(thread_id=pk).count()
            return Response({'like': count}, status=HTTP_201_CREATED)
