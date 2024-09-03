from django.contrib import admin
from django.urls import path

from .views import InstructorView
from .views import InstructorDetail

urlpatterns = [
    
    path('', InstructorView.as_view(), name='instructor_default'),
       
    path('InstructorAPI/', InstructorView.as_view(), name = 'InstructorAPI'),
    
    path('InstructorAPI/<int:pk>/', InstructorDetail.as_view(), name = 'InstructorAPI'),

    
       
   
        
    
]
