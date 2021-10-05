from dj_rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class ThlogUserDetailSerializer(UserDetailsSerializer):
    class Meta:
        model = User
        fields = ('username', 'avatar', 'nickname', 'introduce', 'github', 'website')


class SimpleThlogUserSerializer(UserDetailsSerializer):
    class Meta:
        model = User
        fields = ('username', 'nickname', 'avatar')
