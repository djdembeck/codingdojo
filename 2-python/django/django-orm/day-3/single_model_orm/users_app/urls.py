from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
	path('add_user', views.add_user),
	path('remove_last', views.remove_last)
]