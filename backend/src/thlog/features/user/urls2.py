from django.urls import path, re_path, include
from thlog.features.user import views

urlpatterns = [
    path('activities', views.UserActivitiesView.as_view(), name="user_activities_view"),
]
