from django.urls import path
from core.views import index, about, sermon, event, contact

app_name = 'core'

urlpatterns = [
    path('', index),
    path('about', about),
    path('sermons', sermon),
    path('events', event),
    path('contact', contact),
]