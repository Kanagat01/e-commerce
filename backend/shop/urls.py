from django.conf import settings
from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:category_id>/products/',
         CategoryProductsListView.as_view(), name='category-products-list'),
    path('add_to_favorites/', AddToFavoritesView.as_view(), name='add-to-favorites'),
]


if settings.DEBUG:
    from django.conf.urls.static import static

    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
