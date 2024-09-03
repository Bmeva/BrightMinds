from django.contrib import admin
from django.urls import path

from .views import PaymentView
from .views import PaymentCrud

urlpatterns = [
    
    path('', PaymentView.as_view(), name='payment_default'),
       
    path('PaymentAPI/', PaymentView.as_view(), name = 'PaymentAPI'),
    
    path('PaymentAPI/<int:pk>/', PaymentCrud.as_view(), name = 'PaymentAPI'),

    
       
   
        
    
]
