from django.shortcuts import render, redirect
from login.models import User
from .models import Book
from django.contrib import messages

def index(request):
	# Don't even process if user isn't signed in
	if 'userid' not in request.session:
		return redirect('/')

	context = {
		"this_user": User.objects.get(id=request.session['userid']),
	}
	return render(request, "front_page.html", context)