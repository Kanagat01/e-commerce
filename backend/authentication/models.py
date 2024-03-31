from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


phone_regex = RegexValidator(
    regex=r'^\+?1?\d{9,15}$',
    message="Номер телефона должен быть введен в формате: '+999999999'. Максимум 15 цифр допускается."
)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(
        validators=[phone_regex], max_length=17, blank=True)
    delivery_address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)
    postal_code = models.CharField(max_length=20, blank=True)
    favorites = models.ManyToManyField(
        'shop.Product', related_name='favorited_by', blank=True)

    def __str__(self):
        return self.user.username


class SellerProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
