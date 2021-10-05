from rest_framework.generics import *
from django.contrib.auth import get_user_model
from thlog.permissions import *
from thlog.features.reply.serializers import *

User = get_user_model()


class ReplyCreateView(CreateAPIView):
    serializer_class = ReplySerializer
    queryset = Reply.objects.all()
    permission_classes = [IsAuthorOrReadOnly]

    def perform_create(self, serializer):
        comment = self.kwargs.get('comment')
        serializer.save(comment_id=comment, user=self.request.user)


class ReplyDetailView(UpdateAPIView, DestroyAPIView):
    serializer_class = ReplySerializer
    queryset = Reply.objects.all()
    permission_classes = [IsAuthorOrReadOnly]

    def get_queryset(self):
        return self.queryset.filter(comment=self.kwargs.get('comment'))

    def get_object(self):
        obj = self.queryset.filter(id=self.kwargs.get('pk')).get()
        self.check_object_permissions(self.request, obj)
        return obj
