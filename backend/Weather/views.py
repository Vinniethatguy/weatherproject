from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .seraializers import ZipSerializer, LocationSerializer
from .models import Location, Zip


class AddCityView(APIView):
    def get(self, request):
        return Response("Add city get finder")
    
    def post(self, request):
        print("state_id: ",request.data['state_id'])
        location_data = {
            "city": request.data['city'],
            "state": request.data['state'],
            "state_id": request.data['state_id'],
            "latitude":request.data['latitude'],
            "longitude": request.data['longitude'],
        }        
        locSerializer = LocationSerializer(data=location_data)
        if locSerializer.is_valid():
            locSerializer.save()
        else:
            print("Invalid data")
            print(locSerializer.errors)
            
        location_id = Location.objects.filter(city=location_data['city'], state_id=location_data['state_id'])[0].id
        print(location_id)
        
      
        
        zip_codes = request.data['zip_codes']
        for zip in zip_codes.split(' '):
            zip_data = {
                "zipcode" : zip,
                "location_id" : location_id 
            }
            zip_serializer = ZipSerializer(data=zip_data)
            if zip_serializer.is_valid():
                zip_serializer.save()
            else:
                print("error")
        
        
        return Response("I am post there")
    

