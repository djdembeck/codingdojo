from django.urls import path     
from . import views
urlpatterns = [
	path('shows/<int:id>', views.show_details),
    path('shows/new', views.new_show),
	path('shows/create', views.add_show),
	path('shows/<int:id>/delete', views.del_show),
	path('shows/<int:id>/edit', views.edit_show),
]