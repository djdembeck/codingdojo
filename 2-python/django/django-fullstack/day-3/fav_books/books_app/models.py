from django.db import models
from login.models import User

class BookManager(models.Manager):

	def book_validator(self, post_data):
		errors = {}

		if len(post_data['book_title']) == 0:
			errors['book_title'] = "Book title should be at least 5 characters"

		if len(post_data['book_description']) != 0 and len(post_data['book_description']) < 5:
			errors['book_description'] = "Book description should be at least 5 characters"
		return errors
	
	def deletion_validator(self, book_id, user_id):
		errors = {}

		check_poster = Book.objects.get(id=book_id)
		
		# Ensure request comes from the user id that created the content
		if check_poster.uploaded_by.id != user_id:
			errors['failed_to_delete'] = "You cannot delete an item you didn't create"

		return errors

# Create your models here.
class Book(models.Model):
	title = models.CharField(max_length=100)
	description = models.TextField()
	uploaded_by = models.ForeignKey(User, related_name="books_uploaded", on_delete = models.CASCADE)
	users_who_like = models.ManyToManyField(User, related_name="liked_books")
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = BookManager()