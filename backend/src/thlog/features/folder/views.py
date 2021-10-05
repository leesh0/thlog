from rest_framework.generics import *
from thlog.permissions import *
from uuid import uuid4
from thlog.features.folder.serializers import *
from django.utils.text import slugify
from thlog.models import *
from thlog.pagination import ThlogPagination


class ThreadFolderListCreateView(ListCreateAPIView):
    serializer_class = FolderListSerializer
    queryset = Folder.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user = self.kwargs.get('username')
        return self.queryset.filter(user__username=user)

    def perform_create(self, serializer):
        request_folder_name = self.request.data.get('name')
        slug = slugify(request_folder_name, allow_unicode=True)
        unique = ''
        while Folder.objects.filter(user=self.request.user, slug=slug + unique).exists():
            unique = f"-{str(uuid4()).split('-')[0]}"
        serializer.save(user=self.request.user, slug=slug + unique)


class ThreadFolderDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = FolderSerializer
    queryset = Folder.objects.all()
    permission_classes = [IsAuthorOrReadOnly]

    def get_queryset(self):
        user = self.kwargs.get('username')
        slug = self.kwargs.get('slug')
        return self.queryset.filter(user__username=user, slug=slug)

    def get_object(self):
        user = self.kwargs.get('username')
        slug = self.kwargs.get('slug')
        obj = self.queryset.filter(user__username=user, slug=slug).get()
        self.check_object_permissions(self.request, obj)
        return obj
