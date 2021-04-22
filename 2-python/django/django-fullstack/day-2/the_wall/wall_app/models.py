from django.db import models
from main.models import User
from datetime import datetime,timezone,timedelta


class PostManager(models.Manager):
	
	def deletion_validator(self, content_type, post_id, user_id):
		errors = {}
		# Check what type we need to check against: post or comment
		if content_type == "post":
			check_poster = Post.objects.get(id=post_id)
		elif content_type == "comment":
			check_poster = Comment.objects.get(id=post_id)
		
		# Ensure request comes from the user id that created the content
		if check_poster.user.id != user_id:
			errors['failed_to_delete'] = "You cannot delete an item you didn't create"

		now = datetime.now(timezone.utc)
		# Check if post was made in the last 30 minutes
		if not now-timedelta(minutes=30) <= check_poster.created_at <= now:
			errors['too_old_to_delete'] = "You cannot delete an item older than 30 minutes"

		return errors

# Create your models here.
class Post(models.Model):
	user = models.ForeignKey(User, related_name="posts", on_delete = models.CASCADE)
	message = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = PostManager()

class Comment(models.Model):
	message = models.ForeignKey(Post, related_name="comments", on_delete = models.CASCADE)
	user = models.ForeignKey(User, related_name="comments", on_delete = models.CASCADE)
	comment = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = PostManager()