from django.apps import AppConfig


class ThlogAuthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'thlog_auth'

    def ready(self):
        import thlog_auth.signals
