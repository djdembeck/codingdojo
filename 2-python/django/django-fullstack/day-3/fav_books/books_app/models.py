from django.db import models
from login.models import User

# Create your models here.
class Post(models.Model):
	user = models.ForeignKey(User, related_name="books", on_delete = models.CASCADE)
	title = models.CharField(max_length=100)
	description = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)