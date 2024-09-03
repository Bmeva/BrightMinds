from django.shortcuts import render

# Create your views here.

from .serializer import PaymentSerializer

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Payment
from rest_framework import permissions

# Create your views here.

class PaymentView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    

class PaymentCrud(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    
    
   