from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class Test(APIView):
    def get(self, request):
        data = {
            "user" : {
                "username" : "ExampleMan",
                "photo_id" : "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            "id" : "2",
            "State": "MO",
            "City" : "Kansas City",
            "Zip Code": "64133",
            "Temperature": "70",
            "Feels Like": "55",
            "Precipitation" : "0%",
            "Humidity": "21%",
            "Wind":"10mph",
            "Date": "April 24",
            "Time": "10:00",
            "Forcast": "Sunny"
            
          }
        return Response(data)
