from django.urls import path, include
from pprint import pp

urlpatterns = [
    path('', include('thlog_auth.dj_rest_auth_custom.urls')),
]
