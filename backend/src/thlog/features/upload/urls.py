from django.urls import path
from thlog.features.upload.views import *

urlpatterns = [
    path('image/', ImageUploadView.as_view(), name="image_upload_view"),
]
