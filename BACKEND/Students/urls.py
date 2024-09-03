from django.contrib import admin
from django.urls import path

from .views import StudentView
from .views import StudentCrud

urlpatterns = [
    
    path('', StudentView.as_view(), name='student_default'),
       
    path('StudentAPI/', StudentView.as_view(), name = 'StudentAPI'),
    
    path('StudentAPI/<int:pk>/', StudentCrud.as_view(), name = 'StudentCrud'),

    
       
   
        
    
]
