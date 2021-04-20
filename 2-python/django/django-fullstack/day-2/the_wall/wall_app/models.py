from django.db import models
from main.models import User

# Create your models here.
class Post(models.Model):
	user_id = models.IntegerField()
	message = models.TextField()
	models.ForeignKey(User, related_name="posts", on_delete = models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
	message_id = models.IntegerField()
	models.ForeignKey(Post, related_name="comments", on_delete = models.CASCADE)
	models.ForeignKey(User, related_name="comments", on_delete = models.CASCADE)
	user_id = models.IntegerField()
	comment = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)