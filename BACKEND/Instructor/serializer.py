from .models import Instructor
from rest_framework import serializers

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        exclude = ('created_at',)
