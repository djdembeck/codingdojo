from django.urls import path
from . import views
urlpatterns = [
	path('', views.index),
	# path('add_book', views.add_book),
	# path('edit_book/<int:id>', views.edit_book),
	# path('delete/<int:id>', views.delete)
]