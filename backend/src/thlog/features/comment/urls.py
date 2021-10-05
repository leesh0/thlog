from django.urls import path
from thlog.features.comment.views import *

urlpatterns = [
    path('comments', CommentCreateView.as_view(), name="comment_write_view"),
    path('comments/<str:pk>', CommentDetailView.as_view(), name="comment_detail_view"),
]
