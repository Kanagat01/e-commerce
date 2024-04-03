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

        is_favorite = False
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            profile = UserProfile.objects.get(user=request.user)
            if (profile.favorites.contains(instance)):
                is_favorite = True
        representation['is_favorite'] = is_favorite
        return representation


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
