from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
	path('add_book', views.add_book),
	path('add_author', views.add_author),
	path('author', views.author_index),
	path('books/<int:id>', views.books),
	path('add_author_to_book/<int:id>', views.add_author_to_book),
	path('authors/<int:id>', views.authors),
	path('add_book_to_author/<int:id>', views.add_book_to_author),
]