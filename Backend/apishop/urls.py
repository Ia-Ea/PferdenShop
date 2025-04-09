from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from .views import ProductAPIView, ProductDetailsAPIView, HorseAPIView, HorseDetailsAPIView, EmployeesAPIView, EmployeesDetailsAPIView    
from . import views


urlpatterns = [
    path('Home/', views.home, name='Pferdenshop_home'),
    path('products/', ProductAPIView.as_view(), name='product_list'),
    path('products/<int:pk>', ProductDetailsAPIView.as_view(), name='product_detail'),
    path('horses/', HorseAPIView.as_view(), name='horse_list'),
    path('horses/<int:pk>', HorseDetailsAPIView.as_view(), name='hors_detail'),
    path('employees/', EmployeesAPIView.as_view(), name='employees_list'),
    path('employees/<int:pk>', EmployeesDetailsAPIView.as_view(), name='employees_detail'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)