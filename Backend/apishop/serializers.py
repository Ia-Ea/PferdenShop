from .models import Product, Horse, Employees
from rest_framework import serializers


class ProductAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [  'id',
                    'name', 
                    'price',
                    'image',
                    ]


class HorseAPISerializer(serializers.ModelSerializer):
    """ image = serializers.ImageField( use_url=True) """

    class Meta:
        model = Horse
        fields = [ 'id',
                   "name",
                    "Gender",
                    "price",
                    "age", 
                    "height", 
                    "description",
                    "image",
                    ]
        

class EmployeesAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = [ 'id',
                   "name",
                   'firstname',
                   "age", 
                   "position", 
                   "department",
                   ]