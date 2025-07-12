from django.db import models
from django.utils.html import mark_safe

class Sermon(models.Model):
    title = models.CharField(max_length=200)
    link = models.URLField(max_length=10000)
    date = models.DateField()
    
    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=200)
    time = models.CharField(max_length=100)
    image = models.ImageField( upload_to="events")
    date = models.DateField()
    
    def __str__(self):
        return self.title
    
class Live(models.Model):
    title = models.CharField(max_length=200)
    link = models.URLField(max_length=10000)
    link = models.TextField()
    
    def __str__(self):
        return self.link