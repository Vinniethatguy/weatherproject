from django.urls import path
from .views import LoginView, RegisterView

urlpatterns = [
      path('login/', LoginView.as_view(), name="Test"),
      path('register/', RegisterView.as_view(),name='Weather' )
]
