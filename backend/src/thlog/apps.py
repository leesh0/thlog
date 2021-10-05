from django.apps import AppConfig


class ThlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'thlog'
    def ready(self):
        import thlog.signals
