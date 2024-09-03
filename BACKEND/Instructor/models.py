from django.db import models
from django.contrib.auth.models import User

class Instructor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=50)
    qualification = models.CharField(max_length=200)
    bio = models.TextField(blank=True)  # Short biography
    profile_picture = models.ImageField(upload_to='instructors/', null=True, blank=True)
    mobile_no = models.CharField(max_length=25)
    address = models.TextField()
    website = models.URLField(blank=True, null=True)  # Optional field for personal website
    facebook = models.URLField(null=True, blank=True)  
    twitter = models.URLField(null=True, blank=True)  
    ig = models.URLField(null=True, blank=True)  
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Instructors' 
        
    def __str__(self):
        return f" {self.first_name}, {self.last_name}"

