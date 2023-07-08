from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth.models import User


class LoginView(APIView):
    def get(self, request):
        return Response("hello from login")
    
    def post(self, request):
        print(request.data)
        username = request.data['username']
        password = request.data["password"]
        userObjects = User.objects.filter(username =username)
        if len(userObjects) == 1 and userObjects[0].check_password(password):
            return Response({"username": username})
        else:
            return Response({"errors": "Improper login"})

class RegisterView(APIView):
    def get(self, request):
        return Response("hello from Register")
    
    def post(self, request):
        user_data = dict(request.data)
        if user_data['password'] != user_data['passcheck']:
            return Response("Mismatch password")
       
        userInfo = {
                'username' :user_data['username'][0],
                'email': "anon@anon.com",
                'password' : user_data['password'][0],
                'first_name' : "N/A",
                'last_name' : "N/A"
            }
       
        userSerializer = UserSerializer(data=userInfo)
        if userSerializer.is_valid():
            userSerializer.save()
            return Response("Proper user Data given")
        else:
            print(userSerializer.error_messages)
            print(userSerializer.errors)
            return Response(userSerializer.errors)
