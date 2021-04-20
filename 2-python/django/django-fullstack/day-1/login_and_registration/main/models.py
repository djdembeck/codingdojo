from django.db import models
import re

class UserManager(models.Manager):
	def basic_validator(self, post_data):
		errors = {}

		# first name validations
		if len(post_data['first_name']) < 3:
			errors["first_name"] = "First name should have more than 3 characters"
		if len(post_data['first_name']) > 50:
			errors["first_name"] = "First name should NOT have more than 50 characters"

		# last name validations
		if len(post_data['last_name']) < 3:
			errors["last__name"] = "Last name should have more ethan 3 characters"
		if len(post_data['last_name']) > 50:
			errors["last_name"] = "First name should NOT have more than 50 characters"

		# Email validations
		EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

		if not EMAIL_REGEX.match(post_data['register_email']):
			errors["register_email"] = "Invalid email address!"

		# Password validations
		if len(post_data['register_password']) < 8:
			errors['register_password'] = "Password is too short!"
		if len(post_data['register_password']) > 256:
			errors['register_password'] = "Password is too long!"
		if post_data['register_password'] != post_data['register_confirm_password']:
			errors['register_confirm_password'] = "Passwords do not match"

		return errors

# Create your models here.
class User(models.Model):
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	email = models.CharField(max_length=100)
	password  = models.CharField(max_length=512)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = UserManager()