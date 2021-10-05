from rest_framework import serializers
from thlog.models import *
from thlog.features.thread.serializers import ThreadSerializer

User = settings.AUTH_USER_MODEL


class FolderListSerializer(serializers.ModelSerializer):
    threads_count = serializers.SerializerMethodField(read_only=True)

    @staticmethod
    def get_threads_count(obj: Folder):
        return obj.threads.count()

    class Meta:
        model = Folder
        exclude = ('user',)
        read_only_fields = ('id', 'slug')


class FolderSerializer(FolderListSerializer):
    threads = ThreadSerializer(read_only=True)
