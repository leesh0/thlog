from django.urls import path, re_path, include
from thlog.features.user import views
urlpatterns = [
    path('', views.UserDetailView.as_view(), name="user_detail_view"),
    path('follow', views.UserFollowView.as_view(), name="user_follow_view"),
    path('following', views.UserFollowingView.as_view(), name="user_following_view")
]
