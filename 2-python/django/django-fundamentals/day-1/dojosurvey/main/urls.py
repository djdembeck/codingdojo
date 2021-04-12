from django.urls import path     
from . import views
urlpatterns = [
    path('', views.input),
	path('show', views.survey_results),
]