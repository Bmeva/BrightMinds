from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) 
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=50)
    qualification = models.CharField(max_length=200, blank=True, null=True)
    mobile_no = models.CharField(max_length=25)
    address = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='students/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = '1: Students' 
    
    def __str__(self):
        return f" {self.first_name} by {self.last_name}"

