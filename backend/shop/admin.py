from django.contrib import admin
from .models import *


class ShowAllFieldsAdmin(admin.ModelAdmin):
    def get_list_display(self, request):
        list_display = [
            field.name for field in self.model._meta.fields]
        return list_display


admin.site.register(Category, ShowAllFieldsAdmin)
admin.site.register(Product, ShowAllFieldsAdmin)
admin.site.register(Review, ShowAllFieldsAdmin)
admin.site.register(Sale, ShowAllFieldsAdmin)
