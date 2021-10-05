from rest_framework import serializers
from thlog.models import *


class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentImage
        fields = ('comment', 'image')
        extra_kwargs = {
            'comment': {'write_only': True}
        }
