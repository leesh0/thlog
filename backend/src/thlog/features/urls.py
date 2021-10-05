from django.urls import path, re_path, include
from django.urls.converters import StringConverter
from django.urls import register_converter


class UserNameConverter(StringConverter):
    regex = '[\w.@+-]+'


register_converter(UserNameConverter, 'user')
urlpatterns = [
    path('upload/',include('thlog.features.upload.urls')),
    path('search/',include('thlog.features.search.urls')),
    path('reply/', include('thlog.features.reply.urls')),
    path('folder/<user:username>/', include('thlog.features.folder.urls')),
    path('thread/<user:username>/<str:thread>/', include('thlog.features.comment.urls')),
    path('thread/<user:username>/', include('thlog.features.thread.urls')),
    path('user/', include('thlog.features.user.urls2')),
    path('<user:username>/', include('thlog.features.user.urls'))
]
