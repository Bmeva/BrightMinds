
from .serializer import InstructorSerializer

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Instructor
from rest_framework import permissions

# Create your views here.

class InstructorView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    

class InstructorDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    
    
   