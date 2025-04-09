from django.contrib import admin
from .models import Product, Horse, Employees
# Register your models here.
admin.site.register(Product)
admin.site.register(Horse)       
admin.site.register(Employees)