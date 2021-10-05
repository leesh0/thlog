from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.conf import settings
from django.contrib.postgres.indexes import GinIndex
from django.contrib.postgres.search import SearchVectorField, SearchVector
from django.contrib.auth.models import UserManager
from allauth.socialaccount.models import SocialAccount
from django_resized import ResizedImageField
from uuid import uuid4
from image_cropping import ImageRatioField
import os

User = settings.AUTH_USER_MODEL


def upload_avatar_to(instance, filename):
    upload_to = 'avatar'
    ext = filename.split('.')[-1]
    key = str(uuid4()).split('-')[0]
    filename = f'{instance.username}-{key}.png'
    return os.path.join(upload_to, filename)


# https://stackoverflow.com/questions/6195478/max-image-size-on-file-upload
def validate_avatar(obj):
    filesize = obj.file.size
    megabyte_limit = 5.0
    if filesize > megabyte_limit * 1024 * 1024:
        raise ValidationError(f"Max file size is {megabyte_limit}MB")


class UserSearchManager(UserManager):
    def with_documents(self):
        vector = (
                SearchVector("username", weight='A')
                + SearchVector("nickname", weight='A')
                + SearchVector("introduce", weight='B')
        )
        return self.get_queryset().annotate(document=vector)


# Create your models here.
class ThlogUser(AbstractUser):
    username = models.CharField(max_length=30, verbose_name='username', unique=True)
    avatar = ResizedImageField(size=[200, 200], quality=75, crop=['middle', 'center'], upload_to=upload_avatar_to,
                               default=None, null=True, force_format='PNG')
    nickname = models.CharField(max_length=20, default=None, null=True)
    introduce = models.CharField(max_length=300, default=None, null=True)
    github = models.CharField(max_length=50, default=None, null=True)
    website = models.URLField(max_length=200, default=None, null=True)
    sv = SearchVectorField(null=True)
    objects = UserSearchManager()

    USERNAME_FIELD = 'username'

    class Meta:
        indexes = [
            GinIndex(fields=['sv'])
        ]

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if (
                "update_fields" not in kwargs
                or "sv" not in kwargs["update_fields"]
        ):
            instance = (
                self._meta.default_manager
                    .with_documents().get(pk=self.pk)
            )
            instance.sv = instance.document
            instance.save(update_fields=["sv"])
