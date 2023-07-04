from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

#first endpoint to test how data is displayed

class Test(APIView):
    def get(self, request):
        data = {
            "weatherInfo": {
                "location": 'Columbia MO',
                "days":  [
                    ("Sunday", "May 07, 2023", 90, 23, 1000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fcute-flat-sun-icon-gm1124567572-295276738&psig=AOvVaw2Jl2bhbNWBe4b909o_Y9q6&ust=1684010351646000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCWkMnR8P4CFQAAAAAdAAAAABAD"),
                    ("Monday", "May 08, 2023", 90, 23, 1000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fcute-flat-sun-icon-gm1124567572-295276738&psig=AOvVaw2Jl2bhbNWBe4b909o_Y9q6&ust=1684010351646000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCWkMnR8P4CFQAAAAAdAAAAABAD"),
                    ("Tuesday", "May 09, 2023", 90, 23, 1000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fcute-flat-sun-icon-gm1124567572-295276738&psig=AOvVaw2Jl2bhbNWBe4b909o_Y9q6&ust=1684010351646000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCWkMnR8P4CFQAAAAAdAAAAABAD"),
                    ("Wednesday", "May 10, 2023", 90, 23, 1000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fcute-flat-sun-icon-gm1124567572-295276738&psig=AOvVaw2Jl2bhbNWBe4b909o_Y9q6&ust=1684010351646000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCWkMnR8P4CFQAAAAAdAAAAABAD"),
                    ("Thursday", "May 11, 2023", 90, 23, 1000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fcute-flat-sun-icon-gm1124567572-295276738&psig=AOvVaw2Jl2bhbNWBe4b909o_Y9q6&ust=1684010351646000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCWkMnR8P4CFQAAAAAdAAAAABAD")
                    ]
            }
        }
        return Response(data)
