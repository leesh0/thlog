from rest_framework import serializers
from thlog.models import *
from thlog_auth.serializers import ThlogUserDetailSerializer


class ReplySerializer(serializers.ModelSerializer):
    user = ThlogUserDetailSerializer()

    class Meta:
        model = Reply
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    user = ThlogUserDetailSerializer(read_only=True)
    replies = serializers.SerializerMethodField(read_only=True)
    reply_count = serializers.SerializerMethodField(read_only=True)

    @staticmethod
    def get_reply_count(obj: Comment):
        return obj.replies.count()

    def get_replies(self, instance):
        replies = instance.replies.all().order_by('created_at')
        return ReplySerializer(replies, many=True).data

    class Meta:
        model = Comment
        exclude = ('thread',)
