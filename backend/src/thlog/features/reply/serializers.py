from rest_framework import serializers
from thlog.models import *
from thlog_auth.serializers import ThlogUserDetailSerializer


class ReplySerializer(serializers.ModelSerializer):
    user = ThlogUserDetailSerializer(read_only=True)

    class Meta:
        model = Reply
        fields = "__all__"
        read_only_fields = ('comment',)
