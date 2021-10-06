from django.conf import settings
from django.urls import path
from thlog_auth.dj_rest_auth_custom.views import GithubLogin
from thlog_auth.dj_rest_auth_custom.views import UserDeleteView
from dj_rest_auth.views import (
    LoginView, LogoutView, PasswordChangeView, PasswordResetConfirmView,
    PasswordResetView, UserDetailsView
)

urlpatterns = [
    # URLs that do not require a session or valid token
    path('login/', LoginView.as_view(), name='rest_login'),
    path('delete/', UserDeleteView.as_view(), name='user_delete'),
    # URLs that require a user to be logged in with a valid session / token.
    path('logout/', LogoutView.as_view(), name='rest_logout'),
    path('github', GithubLogin.as_view(), name='github_login'),
    path('user/', UserDetailsView.as_view(), name='rest_user_details'),
]

if getattr(settings, 'REST_USE_JWT', False):
    from rest_framework_simplejwt.views import TokenVerifyView
    from .views import get_refresh_view

    urlpatterns += [
        path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
        path('token/refresh/', get_refresh_view().as_view(), name='token_refresh'),
    ]
