from .models import *
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=Thread)
def thread_create_post_save(sender, **kwargs):
    instance = kwargs.get('instance')
    if not instance:
        return False

    message = f""""{instance.title}" 쓰레드를 생성하였습니다."""
    UserActivity(user=instance.owner, target_thread=instance, desc=message).save()


@receiver(post_save, sender=Comment)
def comment_create_post_save(sender, **kwargs):
    instance = kwargs.get('instance')
    if not instance:
        return False

    thread = instance.thread
    to_user = thread.owner
    from_user = instance.user
    message = f"""쓰레드에 새로운 코멘트가 추가되었습니다."""
    activities = [
        UserActivity(user=to_user, from_user=from_user, target_thread=thread, target_comment=instance, desc=message),
        UserActivity(user=from_user, target_thread=thread, target_comment=instance, desc=message),
    ]
    UserActivity.objects.bulk_create(activities)


@receiver(post_save, sender=Reply)
def reply_create_post_save(sender, **kwargs):
    instance = kwargs.get('instance')
    if not instance:
        return False

    thread = instance.comment.thread
    comment = instance.comment
    to_user = instance.comment.user
    from_user = instance.user
    message = f"""새로운 답글이 달렸습니다."""
    activities = [
        UserActivity(user=to_user, from_user=from_user, target_thread=thread, target_comment=comment, desc=message),
        UserActivity(user=from_user, target_thread=thread, target_comment=comment, desc=message)
    ]
    UserActivity.objects.bulk_create(activities)


@receiver(post_save, sender=FollowUser)
def follow_create_post_save(sender, **kwargs):
    instance = kwargs.get('instance')
    if not instance:
        return False

    to_user = instance.follow
    from_user = instance.user
    message = f"""팔로우를 시작하였습니다."""
    UserActivity(user=to_user, from_user=from_user, desc=message).save()
