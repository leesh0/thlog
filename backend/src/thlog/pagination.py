from rest_framework.pagination import PageNumberPagination

class ThlogPagination(PageNumberPagination):
    page_size = 20
