from django.db import models
from main.models import User

# Create your models here.
class Post(models.Model):
	user = models.ForeignKey(User, related_name="posts", on_delete = models.CASCADE)
	message = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
	message = models.ForeignKey(Post, related_name="comments", on_delete = models.CASCADE)
	user = models.ForeignKey(User, related_name="comments", on_delete = models.CASCADE)
	comment = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)