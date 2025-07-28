from django.db import models

# Create your models here.
class Post(models.Model):
    name=models.CharField(max_length=100)
    roll=models.IntegerField()
    email=models.EmailField(null=True,blank=True)
    def __str__(self):
        return self.name