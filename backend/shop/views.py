from django.shortcuts import get_object_or_404
from rest_framework import permissions, status, generics, views
from rest_framework.response import Response

from authentication.models import UserProfile
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(views.APIView):
    def get(self, request, pk, format=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryProductsListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['pk']
        return Product.objects.filter(category__id=category_id)


class ToggleFavoriteView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        product_id = request.data.get('product_id')
        product = get_object_or_404(Product, pk=product_id)
        profile = UserProfile.objects.get(user=request.user)

        if profile.favorites.filter(id=product_id).exists():
            profile.favorites.remove(product)
            return Response({"message": f"Продукт {product.name} удален из избранного"}, status=status.HTTP_200_OK)
        else:
            profile.favorites.add(product)
            return Response({"message": f"Продукт {product.name} добавлен в избранное"}, status=status.HTTP_200_OK)
