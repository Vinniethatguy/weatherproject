from django.db import models

class Locations(models.Model):
    city = models.TextField(max_length=50, unique=True)
    state = models.TextField(max_length=50)
    state_id = models.TextField(max_length=5)
    longitude = models.TextField(max_length=50) 
    latitude = models.TextField(max_length=50) 
    
class Zip(models.Model):    
    zipcode = models.TextField(max_length=20)
    location_id = models.ForeignKey(Locations, on_delete = models.CASCADE)
    class Meta:
        unique_together = ('zipcode', 'location_id')
        
    

    