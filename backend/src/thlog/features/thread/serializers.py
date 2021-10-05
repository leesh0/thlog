from rest_framework import serializers
from thlog.models import *
from thlog.features.comment.serializers import CommentSerializer
from thlog_auth.serializers import ThlogUserDetailSerializer
from taggit.serializers import (TagListSerializerField,
                                TaggitSerializer)

User = settings.AUTH_USER_MODEL


class ThreadSerializer(TaggitSerializer, serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    comments_count = serializers.SerializerMethodField(read_only=True)
    is_owner = serializers.SerializerMethodField(read_only=True)
    updated_at = serializers.SerializerMethodField(read_only=True)
    topics = TagListSerializerField(required=False)
    owner = ThlogUserDetailSerializer(read_only=True)
    liked = serializers.SerializerMethodField(read_only=True)

    def get_is_owner(self, obj):
        req = self.context.get('request')
        user = req.user
        return obj.owner == user

    def get_liked(self, obj):
        req = self.context.get('request')
        if req.user.is_authenticated:
            return obj.likes.filter(user=req.user).exists()
        return False

    @staticmethod
    def get_likes(obj):
        return obj.likes.count()

    @staticmethod
    def get_comments_count(obj: Thread):
        return obj.comments.count()

    @staticmethod
    def get_updated_at(obj: Thread):
        recent = obj.comments.all().order_by('-updated_at').first()
        return recent.updated_at if recent else obj.created_at

    @staticmethod
    def validate_topics(value):
        if len(value) > 5:
            raise serializers.ValidationError({'message': '토픽은 최대 5개까지 지정이 가능합니다.'})
        else:
            return value

    class Meta:
        model = Thread
        exclude = ('sv',)
        read_only_fields = ('owner',)
        extra_kwargs = {
            'folder': {'write_only': True}
        }


class ThreadViewSerializer(ThreadSerializer):
    comments = serializers.SerializerMethodField(read_only=True)

    def get_comments(self, instance):
        comments = instance.comments.all().order_by('created_at')
        return CommentSerializer(comments, many=True).data

    def to_representation(self, instance):
        if self.context.get('request').method != 'GET':
            serializer = ThreadSerializer(instance, context={'request': self.context.get('request')})
            return serializer.data
        return super().to_representation(instance)

    class Meta:
        model = Thread
        fields = '__all__'
