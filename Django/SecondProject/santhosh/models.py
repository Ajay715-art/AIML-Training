from django.db import models

# Create your models here.
class Post(models.Model):
    name=models.CharField(max_length=100)
    roll=models.IntegerField()
    
    IMAGE=models.ImageField(default="blank.png",blank=True,null=True)