from django.db import models
import re
from datetime import datetime

class UserManager(models.Manager):
	EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
	
	def reg_validator(self, post_data):
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

		# birth date validation
		# ATM, this doesn't actually run, as the COPPA check below inherently does this
		if datetime.strptime(post_data['birth_date'], '%Y-%m-%d').date() > datetime.now().date():
			errors["birth_date"] = "Date must be in the past"

		# COPPA validation
		today = datetime.now().date()
		# convert post string into datetime object
		born = datetime.strptime(post_data['birth_date'], '%Y-%m-%d').date()
		# Mafs
		age = today.year - born.year - ((today.month, today.day) < (born.month, born.day))

		# If difference between today and birthdate is less than 13 (COPPA)
		if age < 13:
			errors["birth_date"] = "Must be 13 or older to register"
		
		# Email validations

		if not self.EMAIL_REGEX.match(post_data['register_email']):
			errors["register_email"] = "Invalid email address!"

		if User.objects.filter(email=post_data['register_email']):
			errors["register_email"] = "A user with this email already exists"

		# Register Ppssword validations
		if len(post_data['register_password']) < 8:
			errors['register_password'] = "Password is too short!"
		if len(post_data['register_password']) > 256:
			errors['register_password'] = "Password is too long!"
		if post_data['register_password'] != post_data['register_confirm_password']:
			errors['register_confirm_password'] = "Passwords do not match"

		return errors
	def login_validator(self, post_data):
		errors = {}

		if not self.EMAIL_REGEX.match(post_data['login_email']):
			errors["login_email"] = "Invalid email address!"

		if len(post_data['login_password']) < 8:
			errors['login_password'] = "Password is too short!"
		if len(post_data['login_password']) > 256:
			errors['login_password'] = "Password is too long!"

		return errors

# Create your models here.
class User(models.Model):
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	birth_date = models.DateField()
	email = models.CharField(max_length=100)
	password  = models.CharField(max_length=512)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = UserManager()