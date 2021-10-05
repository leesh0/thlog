from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings
from thlog.utils import gen_pk
from django.utils.translation import ugettext_lazy as _
from taggit.managers import TaggableManager
from taggit.models import CommonGenericTaggedItemBase, TaggedItemBase
from taggit.models import Tag, ItemBase
from django.contrib.postgres.indexes import GinIndex
from django.contrib.postgres.search import SearchVectorField, SearchVector
from django.core.exceptions import ValidationError
from uuid import uuid4
import os

# from django.contrib.postgres.indexes import GinIndex
# import django.contrib.postgres.search as pg_search
# # https://stackoverflow.com/questions/43793987/how-to-create-gin-index-in-django-migration
# # https://pganalyze.com/blog/full-text-search-django-postgres
# https://stackoverflow.com/questions/47377947/use-of-full-text-search-gin-in-a-view-django-1-11
# Create your models here.

User = settings.AUTH_USER_MODEL


def upload_image_to(instance, filename):
    upload_to = 'images'
    ext = filename.split('.')[-1]
    key = str(uuid4())
    filename = f'{key}.{ext}'
    return os.path.join(upload_to, filename)


def validate_image(image):
    file_size = image.size
    limit_mb = 8
    if file_size > limit_mb * 1024 * 1024:
        raise ValidationError("Max size of file is %s MB" % limit_mb)


# https://stackoverflow.com/questions/31683216/django-taggit-on-models-with-uuid-as-pk-throwing-out-of-range-on-save
# https://django-taggit.readthedocs.io/en/latest/custom_tagging.html
# https://stackoverflow.com/questions/47377947/use-of-full-text-search-gin-in-a-view-django-1-11
class ThreadSearchManager(models.Manager):
    def with_documents(self):
        vector = (
                SearchVector("title", weight='A')
                + SearchVector("folder__name", weight='C')
        )
        return self.get_queryset().annotate(document=vector)


class CustomPkTaggedItemBase(CommonGenericTaggedItemBase, TaggedItemBase):
    object_id = models.CharField(max_length=60, verbose_name=_("object ID"), db_index=True)


class Folder(models.Model):
    id = models.CharField(primary_key=True, default=gen_pk, editable=False, max_length=60, db_index=True, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='folders')
    name = models.CharField(max_length=40)
    slug = models.SlugField(max_length=100, default="")


class Thread(models.Model):
    id = models.CharField(primary_key=True, default=gen_pk, editable=False, max_length=60, db_index=True, unique=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='threads', db_index=True)
    folder = models.ForeignKey(Folder, on_delete=models.SET_NULL, null=True, default=None, related_name='threads')
    public = models.BooleanField(default=True)
    closed = models.BooleanField(default=False)
    title = models.CharField(max_length=100, null=False)
    topics = TaggableManager(through=CustomPkTaggedItemBase)
    sv = SearchVectorField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = ThreadSearchManager()

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


class Comment(models.Model):
    id = models.CharField(primary_key=True, default=gen_pk, editable=False, max_length=60, db_index=True, unique=True)
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='comments', db_index=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    hide = models.BooleanField(default=False)
    pinned = models.BooleanField(default=False)
    text = models.TextField(max_length=20000, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, db_index=True)
    # add GIN INDEX ?


class CommentImage(models.Model):
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='images', null=True)
    image = models.ImageField(verbose_name='comment image', validators=[validate_image], upload_to=upload_image_to)


class Reply(models.Model):
    id = models.CharField(primary_key=True, default=gen_pk, editable=False, max_length=60, db_index=True, unique=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='replies', db_index=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='replies')
    text = models.TextField(max_length=20000)
    hide = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ThreadLike(models.Model):
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='likes', db_index=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='likes')


class UserActivity(models.Model):
    id = models.CharField(primary_key=True, default=gen_pk, editable=False, max_length=60, db_index=True, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activities')
    from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='to_activities', default=None, null=True)
    target_thread = models.ForeignKey(Thread, on_delete=models.CASCADE, null=True, default=None)
    target_comment = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True, default=None)
    desc = models.CharField(max_length=150, null=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)


class FollowUser(models.Model):
    follow = models.ForeignKey(User, on_delete=models.CASCADE, related_name='followers', db_index=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='followings')
