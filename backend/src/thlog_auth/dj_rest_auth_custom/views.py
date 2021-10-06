from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.settings import api_settings
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client


class CustomTokenRefreshSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()
    access_token = serializers.ReadOnlyField()

    def validate(self, attrs):
        refresh = RefreshToken(attrs['refresh_token'])

        data = {'access_token': str(refresh.access_token)}

        if api_settings.ROTATE_REFRESH_TOKENS:
            if api_settings.BLACKLIST_AFTER_ROTATION:
                try:
                    # Attempt to blacklist the given refresh token
                    refresh.blacklist()
                except AttributeError:
                    # If blacklist app not installed, `blacklist` method will
                    # not be present
                    pass

            refresh.set_jti()
            refresh.set_exp()

            data['refresh_token'] = str(refresh)

        return data


def get_refresh_view():
    """ Change Token field name - Suumokr """
    from rest_framework_simplejwt.views import TokenRefreshView

    class RefreshView(TokenRefreshView):
        serializer_class = CustomTokenRefreshSerializer

    return RefreshView


class GithubLogin(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    client_class = OAuth2Client
    callback_url = 'http://3.37.199.195/auth/github'


class UserDeleteView(APIView):
    def post(self, *args, **kwargs):
        try:
            result = self.request.user.delete()
            return Response({'details': '탈퇴되었습니다.'}, status=HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'details': '탈퇴에 실패하였습니다.'}, status=HTTP_406_NOT_ACCEPTABLE)
