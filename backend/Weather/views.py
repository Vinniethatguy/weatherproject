from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

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
        print(location_data)
        return Response("I am post there")
