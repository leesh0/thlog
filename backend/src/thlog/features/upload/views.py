from rest_framework.generics import *
from rest_framework.permissions import IsAuthenticated
from thlog.features.upload.serializers import ImageUploadSerializer
from thlog.models import CommentImage

class ImageUploadView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ImageUploadSerializer
    queryset = CommentImage.objects.all()
