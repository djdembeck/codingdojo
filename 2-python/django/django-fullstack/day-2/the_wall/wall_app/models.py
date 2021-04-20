from django.db import models

# Create your models here.
class Post(models.Model):
	user_id = models.IntegerField()
	message = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
	message_id = models.IntegerField()
	user_id = models.IntegerField()
	comment = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)