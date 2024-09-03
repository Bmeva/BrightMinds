from django.shortcuts import render

# Create your views here.

from .serializer import StudentSerializer

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from rest_framework import permissions

# Create your views here.

class StudentView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    

class StudentCrud(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
    
   