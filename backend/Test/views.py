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
            "title" : "Person"
            }
        return Response(data)
