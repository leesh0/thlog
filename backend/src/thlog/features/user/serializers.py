from rest_framework import serializers
from thlog.models import *
from django.contrib.auth import get_user_model
from thlog_auth.serializers import ThlogUserDetailSerializer
from thlog.features.thread.serializers import ThreadSerializer
from thlog.features.comment.serializers import CommentSerializer

User = get_user_model()


class UserActivitiesSerializer(serializers.ModelSerializer):
    user = ThlogUserDetailSerializer(read_only=True)
    from_user = ThlogUserDetailSerializer(read_only=True)
    target_thread = ThreadSerializer(read_only=True)
    target_comment = CommentSerializer(read_only=True)
    class Meta:
        model = UserActivity
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'introduce', 'avatar', 'nickname', 'github', 'website')


class UserFollowSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = FollowUser
        fields = ('user',)
