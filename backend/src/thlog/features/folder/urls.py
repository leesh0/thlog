from django.urls import path, re_path, include
from thlog.features.folder.views import *
from django.urls import register_converter
from django.urls.converters import StringConverter


class SlugConverter(StringConverter):
    regex = '[\w-]+'


class UserNameConverter(StringConverter):
    regex = '[\w.@+-]+'


register_converter(SlugConverter, 'slug')
register_converter(UserNameConverter, 'user')
urlpatterns = [
    path('', ThreadFolderListCreateView.as_view(), name="folder_list_view"),
    path('<slug:slug>', ThreadFolderDetailView.as_view(), name="folder_detail_view"),
]
