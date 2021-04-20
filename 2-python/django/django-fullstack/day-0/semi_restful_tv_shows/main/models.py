from django.db import models
from datetime import date

class ShowManager(models.Manager):
	def basic_validator(self, post_data):
		errors = {}
		if len(post_data['title']) < 5:
			errors["title"] = "Show title should be at least 5 characters"
		if 0 < len(post_data['description']) < 25:
			errors["description"] = "Show description can be either empty or more than 25 characters"
		if len(post_data['network']) < 2:
			errors["network"] = "Network should be more than 2 characters"
		if post_data['release_date'] > str(date.today()):
			errors["release_date"] = "Date must be in the past"
		return errors

class Show(models.Model):
	title = models.CharField(max_length=255)
	network = models.CharField(max_length=255)
	release_date = models.DateField()
	desc = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = ShowManager()