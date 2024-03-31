from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.ForeignKey(
        Category, related_name='products', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    seller = models.ForeignKey(
        'authentication.SellerProfile', related_name='products', on_delete=models.CASCADE)
    total_amount = models.PositiveIntegerField()
    discount = models.PositiveIntegerField(null=True, blank=True, validators=[
                                           MinValueValidator(1), MaxValueValidator(100)])

    def __str__(self):
        return self.name

    def total_sales(self):
        return self.sales.aggregate(total_sold=models.Sum('quantity'))['total_sold']

    def average_rating(self):
        return self.reviews.aggregate(models.Avg('rating'))['rating__avg']


class Sale(models.Model):
    product = models.ForeignKey(
        Product, related_name='sales', on_delete=models.CASCADE)
    seller = models.ForeignKey(
        'authentication.SellerProfile', related_name='sales', on_delete=models.CASCADE)
    buyer = models.ForeignKey(
        User, related_name='purchases', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    sale_date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Продажа: #{self.id}, Продукт: {self.product}"


class Review(models.Model):
    product = models.ForeignKey(
        Product, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.TextField()

    def __str__(self):
        return f'{self.rating}/5 от пользователя {self.user.username} к продукту {self.product.name}'
