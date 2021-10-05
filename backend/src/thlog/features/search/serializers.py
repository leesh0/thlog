from rest_framework import serializers
from thlog.models import *
from thlog.features.thread.serializers import ThreadSerializer
from thlog_auth.serializers import SimpleThlogUserSerializer


class KeywordSerializer(serializers.Serializer):
    def to_representation(self, instance):
        if self.context.get('type') == 'user':
            data = SimpleThlogUserSerializer(instance).data
        else:
            data = ThreadSerializer(instance, context={'request': self.context.get('request')}).data
        return data
