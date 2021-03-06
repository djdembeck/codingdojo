from django.shortcuts import render, redirect
from .models import Users

def index(request):
	context = {
		"all_the_users": Users.objects.all()
	}

	return render(request, "index.html", context)

def add_user(request):
	new_user = Users.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email_address=request.POST['email_address'],age=int(request.POST['age']))
	new_user.save()
	return redirect('/')

def remove_last(request):
	last_user = Users.objects.last()
	last_user.delete()
	return redirect('/')