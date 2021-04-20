from django.shortcuts import render,redirect
from .models import User
import bcrypt

# Create your views here.
def index(request):
	return render(request, "index.html")

def register(request):
	password = request.POST['register_password']
	pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
	new_user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['register_email'], password=pw_hash)
	new_user.save()
	return redirect('/success')

def success(request):
	context = {
		"this_user": User.objects.last()
	}
	return render(request, "success.html", context)