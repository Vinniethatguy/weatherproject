from django.contrib import admin
from .models import Zip, Location, Weather_icon

admin.site.register(Zip)
admin.site.register(Location)
admin.site.register(Weather_icon)

# Register your models here.