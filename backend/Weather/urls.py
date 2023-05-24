from django.urls import path
from .views import AddCityView, WeatherDataView

urlpatterns = [
      path('add_city/',AddCityView.as_view(), name="Test"),
      path('data/<str:zip_code>/', WeatherDataView.as_view(),name='Weather' )
]
