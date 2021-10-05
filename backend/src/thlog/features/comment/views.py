from rest_framework.generics import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth import get_user_model
from thlog.features.comment.serializers import *
from django.db.models import Q
from thlog.permissions import *
from sys import getsizeof
from thlog.models import *

User = get_user_model()


class CommentCreateView(CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    permission_classes = [IsPublicOrOwnerOnly]

    def perform_create(self, serializer):
        thread = self.kwargs.get('thread')
        serializer.save(thread_id=thread, user=self.request.user)


class CommentDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    permission_classes = [IsAuthorOrReadOnly]
