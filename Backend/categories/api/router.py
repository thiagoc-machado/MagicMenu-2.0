from rest_framework.routers import DefaultRouter

from .views import CategoryApiViewSet

router_category = DefaultRouter()

router_category.register(prefix='categories', basename='categories', viewset=CategoryApiViewSet)