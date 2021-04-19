from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
	path('add_book', views.add_book),
	# path('add_author', views.index),
	path('books/<int:id>', views.books),
	# path('authors', views.index)
]