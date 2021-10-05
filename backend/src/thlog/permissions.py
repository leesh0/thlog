from rest_framework.permissions import BasePermission, SAFE_METHODS, IsAuthenticatedOrReadOnly
from thlog.models import *


class IsMeOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj: User):
        if request.method in SAFE_METHODS:
            return True
        return obj == request.user


class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj: Thread):
        if request.method in SAFE_METHODS:
            return True
        return obj.owner == request.user


class IsOpenOrOwnerOnly(BasePermission):
    def has_object_permission(self, request, view, obj: Comment):
        if request.method in SAFE_METHODS:
            return True
        if obj.thread.closed:
            return bool(obj.thread.owner == request.user)
        else:
            return True


class IsAuthorOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj: Comment):
        if request.method in SAFE_METHODS:
            return True
        return bool(obj.user == request.user)


class IsPublicOrOwnerOnly(BasePermission):
    def has_object_permission(self, request, view, obj: Comment):
        if obj.thread.closed:
            return False
        return bool(obj.thread.owner == request.user or obj.thread.public)
