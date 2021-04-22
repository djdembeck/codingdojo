from django.urls import path
from . import views
urlpatterns = [
	path('', views.index),
	path('new_book', views.new_book),
	path('<int:id>', views.book_details),
	path('<int:id>/add_favorite', views.add_favorite),
	path('<int:id>/un_favorite', views.un_favorite),
	path('<int:id>/delete_book', views.delete_book),
	path('<int:id>/update_book', views.update_book)
]