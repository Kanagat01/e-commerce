from rest_framework import serializers
from django.contrib.auth.models import User

from shop.serializers import ProductSerializer
from .models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    favorites = ProductSerializer(many=True)

    class Meta:
        model = UserProfile
        fields = '__all__'
