from django.db import models

class Location(models.Model):
    city = models.TextField(max_length=50)
    state = models.TextField(max_length=50)
    state_id = models.TextField(max_length=5)
    longitude = models.TextField(max_length=50) 
    latitude = models.TextField(max_length=50)
    class Meta:
        unique_together = ('city', 'state_id')
    
    def __str__(self):
        return f"{self.city} {self.state_id}"
     
    
class Zip(models.Model):    
    zipcode = models.TextField(max_length=20)
    location_id = models.ForeignKey(Location, on_delete = models.CASCADE)
    class Meta:
        unique_together = ('zipcode', 'location_id')
        
    def __str__(self):
        return f"{self.zipcode} {self.location_id}"
    
    
class Weather_icon(models.Model):
    name = models.CharField(max_length=100)
    image = models.FileField(upload_to ='weather_icon/')
    
    def __str__(self):
        return f"{self.name}"
