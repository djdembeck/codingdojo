from django.db import models
from login.models import User

# Create your models here.
class Author(models.Model):
	name = models.CharField(max_length=50)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
	title = models.CharField(max_length=50)
	user = models.ForeignKey(User, related_name="books", on_delete = models.CASCADE)
	author = models.ForeignKey(Author, related_name="books", on_delete = models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
	rating = models.IntegerField()
	review = models.TextField()
	user = models.ForeignKey(User, related_name="reviews", on_delete = models.CASCADE)
	book = models.ForeignKey(Book, related_name="reviews", on_delete = models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)