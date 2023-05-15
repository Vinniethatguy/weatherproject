from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from .models import Location, Zip

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
        
class ZipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zip
        fields = '__all__'