from django.db import models

class Locations(models.Model):
    city = models.TextField(max_length=50)
    state = models.TextField(max_length=50)
    state_id = models.TextField(max_length=5)
    longitude = models.TextField(max_length=50) 
    latitude = models.TextField(max_length=50) 
    
class Zip(models.Model):
    zipcode = models.TextField(max_length=20)
    article = models.ForeignKey(Locations, on_delete = models.CASCADE)

    