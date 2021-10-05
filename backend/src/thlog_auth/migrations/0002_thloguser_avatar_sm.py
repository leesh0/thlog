# Generated by Django 3.2.7 on 2021-10-04 18:23

from django.db import migrations
import image_cropping.fields


class Migration(migrations.Migration):

    dependencies = [
        ('thlog_auth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='thloguser',
            name='avatar_sm',
            field=image_cropping.fields.ImageRatioField('avatar', '200x200', adapt_rotation=False, allow_fullsize=False, free_crop=False, help_text=None, hide_image_field=False, size_warning=False, verbose_name='avatar sm'),
        ),
    ]
