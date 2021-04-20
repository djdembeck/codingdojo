from django.shortcuts import render, redirect
from main.models import User
from .models import Post, Comment

# Create your views here.
def feed(request):
	if 'userid' not in request.session:
		return redirect('/')

	context = {
		"this_user": User.objects.get(id=request.session['userid'])
	}
	return render(request, "feed.html", context)

def post_message(request):

	return redirect ('/wall')