from django.shortcuts import render
from .models import Product, Horse, Employees
from rest_framework.permissions  import IsAuthenticated, AllowAny
from rest_framework import generics
from .serializers import ProductAPISerializer, HorseAPISerializer, EmployeesAPISerializer    

# Create your views here.

class ProductAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer
    permission_classes = [AllowAny]

class ProductDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()    
    serializer_class = ProductAPISerializer
    permission_classes = [AllowAny]

###################


class HorseAPIView(generics.ListCreateAPIView):
    queryset = Horse.objects.all()
    serializer_class = HorseAPISerializer
    permission_classes = [AllowAny]

class HorseDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Horse.objects.all()
    serializer_class = HorseAPISerializer
    permission_classes = [AllowAny]


#####################
class EmployeesAPIView(generics.ListCreateAPIView):
    queryset = Employees.objects.all()
    serializer_class = EmployeesAPISerializer
    permission_classes = [AllowAny]

class EmployeesDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employees.objects.all()
    serializer_class = EmployeesAPISerializer
    permission_classes = [AllowAny]


def home(request):

    return render(request, 'home.html')
