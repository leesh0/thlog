from django.urls import path, re_path, include
from thlog.features.search.views import *

urlpatterns = [
    path('', KeywordSearchView.as_view(), name="keyword_view"),
    path('topics', TopicSearchView.as_view(), name="topic_view"),
    path('hot-topics', HotTopicView.as_view(),name="hot_topic_view")
]
