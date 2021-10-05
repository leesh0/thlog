from django.urls import path, re_path, include
from thlog.features.thread.views import *
from django.urls import register_converter
from django.urls.converters import StringConverter


class SlugConverter(StringConverter):
    regex = '[\w-]+'


class UserNameConverter(StringConverter):
    regex = '[\w.@+-]+'


register_converter(SlugConverter, 'slug')
register_converter(UserNameConverter, 'user')
urlpatterns = [
    path('', ThreadListCreateView.as_view(), name="thread_list_view"),
    path('<str:pk>', ThreadDetailView.as_view(), name="thread_detail_view"),
    path('<str:pk>/like', ThreadLikeView.as_view(), name="thread_like_view"),
]
