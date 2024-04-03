from django.contrib import admin
from shop.admin import ShowAllFieldsAdmin
from .models import *


admin.site.register(UserProfile, ShowAllFieldsAdmin)
admin.site.register(SellerProfile, ShowAllFieldsAdmin)
