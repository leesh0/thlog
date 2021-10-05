from rest_framework.generics import *
from rest_framework.permissions import *
from rest_framework.exceptions import ValidationError
from rest_framework.mixins import DestroyModelMixin
from thlog.permissions import *
from thlog.models import UserActivity, FollowUser
from django.contrib.auth import get_user_model
from thlog.features.user.serializers import UserActivitiesSerializer, UserSerializer, UserFollowSerializer
from thlog.pagination import ThlogPagination

User = get_user_model()


class UserActivitiesView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserActivitiesSerializer
    queryset = UserActivity.objects.all()
    pagination_class = ThlogPagination

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user).order_by('-created_at')


class UserDetailView(RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'username'


class UserFollowView(ListCreateAPIView, DestroyAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = UserFollowSerializer
    queryset = FollowUser.objects.all()
    pagination_class = ThlogPagination

    def get_queryset(self):
        follow = self.kwargs.get('username')
        return self.queryset.filter(follow__username=follow)

    def get_object(self):
        follow = self.kwargs.get('username')
        return self.queryset.filter(follow__username=follow, user=self.request.user).get()

    def perform_create(self, serializer):
        user = self.request.user
        follow = self.kwargs.get('username')
        if user.followings.filter(follow__username=follow).exists():
            raise ValidationError({'detail': '이미 팔로우하고 있습니다.'})
        follow_user = User.objects.filter(username=follow).get()
        serializer.save(user=user, follow=follow_user)


class UserFollowingView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserFollowSerializer
    queryset = FollowUser.objects.all()
    pagination_class = ThlogPagination

    def get_queryset(self):
        user = self.kwargs.get('user')
        return self.queryset.filter(user__username=user)
