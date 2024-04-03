from rest_framework import serializers

from authentication.models import UserProfile
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['total_sales'] = instance.total_sales()
        representation['average_rating'] = instance.average_rating()
        representation['category'] = instance.category.name
        return representation


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
