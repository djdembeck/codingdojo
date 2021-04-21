from django.urls import path
from . import views
urlpatterns = [
	path('', views.feed),
	path('make_post', views.make_post),
	path('make_comment/<int:parent_id>', views.make_comment),
	path('delete/<str:content_type>/<int:id>', views.delete)
]