from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.FloatField()
    image = models.ImageField(upload_to='images/products/', null=True, blank=True)

    def __str__(self):
        return self.name


class Horse(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    Gender = models.CharField(max_length=50)
    price = models.FloatField()
    age = models.IntegerField()
    height = models.FloatField()
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='images/horse/', null=True, blank=True)

    def __str__(self):
        return self.name
    


class Employees (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    firstname = models.CharField(max_length=50, null=True, blank=True)
    age = models.IntegerField()
    position = models.CharField(max_length=100, null=True, blank=True)
    department = models.CharField(max_length=100, null=True, blank=True)
    
    

    def __str__(self):
        return self.name