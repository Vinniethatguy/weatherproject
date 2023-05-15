from django.urls import path
from .views import AddCityView

urlpatterns = [
      path('add_city/',AddCityView.as_view(), name="Test")

]
