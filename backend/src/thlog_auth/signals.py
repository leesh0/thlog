from .models import *
from django.db.models.signals import post_save
from django.dispatch import receiver
from allauth.account.signals import user_signed_up
from django.contrib.auth import get_user_model
from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
import requests

User = get_user_model()

def get_avatar(url):
    img_temp = NamedTemporaryFile(delete=True)
    img_temp.write(requests.get(url).content)
    img_temp.flush()
    return File(img_temp)

@receiver(user_signed_up)
def set_initial_user_names(request, user, sociallogin=None, **kwargs):
    if sociallogin:
        if sociallogin.account.provider == 'github':
            avatar_url = sociallogin.account.extra_data.get('avatar_url')
            file = get_avatar(avatar_url)
            file_name = f'avatar-{user.username}.jpg'
            user.avatar.save(file_name, file)

    user.save()
