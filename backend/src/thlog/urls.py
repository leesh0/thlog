from django.urls import path, include

urlpatterns = [
    path('', include('thlog.features.urls')),
]
