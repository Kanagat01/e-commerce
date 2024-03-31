from django.shortcuts import get_object_or_404
from rest_framework import permissions, status, generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryProductsListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Product.objects.filter(category__id=category_id)


class AddToFavoritesView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        product_id = request.data.get('product_id')
        product = get_object_or_404(Product, pk=product_id)
        request.user.profile.favorites.add(product)
        return Response(status=status.HTTP_204_NO_CONTENT)
