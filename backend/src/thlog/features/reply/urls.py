from django.urls import path, re_path, include
from thlog.features.reply.views import *

urlpatterns = [
    path('create/<str:comment>', ReplyCreateView.as_view(), name="reply_detail_view"),
    path('<str:pk>', ReplyDetailView.as_view(), name="reply_detail_view"),
]
