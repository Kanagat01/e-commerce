from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/products/',
         CategoryProductsListView.as_view(), name='category-products-list'),
    path('toggle_favorite/', ToggleFavoriteView.as_view(), name='toggle-favorites'),
]
