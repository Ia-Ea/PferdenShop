# Generated by Django 5.1.6 on 2025-03-06 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("apishop", "0007_remove_employees_description_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="employees",
            name="department",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="employees",
            name="firstname",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
