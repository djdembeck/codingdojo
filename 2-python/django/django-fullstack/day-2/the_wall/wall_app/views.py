from django.shortcuts import render, redirect
from main.models import User
from .models import Post, Comment
from django.contrib import messages

# Create your views here.
def feed(request):
	# Don't even process if user isn't signed in
	if 'userid' not in request.session:
		return redirect('/')

	context = {
		"this_user": User.objects.get(id=request.session['userid']),
		"all_posts": Post.objects.all().order_by('-created_at'),
	}
	return render(request, "feed.html", context)

def make_post(request):
	# Don't even process if user isn't signed in
	if 'userid' not in request.session:
		return redirect('/')

	Post.objects.create(message=request.POST['post_contents'], user=User.objects.get(id=request.session['userid']))
	return redirect ('/wall')

def make_comment(request, parent_id):
	# Don't even process if user isn't signed in
	if 'userid' not in request.session:
		return redirect('/')

	Comment.objects.create(comment=request.POST['comment_contents'], user=User.objects.get(id=request.session['userid']), message=Post.objects.get(id=parent_id))
	return redirect('/wall')

def delete(request, content_type, id):
	# Don't even process if user isn't signed in
	if 'userid' not in request.session:
		return redirect('/')

	errors = Post.objects.deletion_validator(content_type, id, request.session['userid'])
	if len(errors) > 0:
		for k, v in errors.items():
			messages.error(request, v)
		return redirect('/wall')
	else:
		if content_type == "post":
			Post.objects.get(id=id).delete()
		if content_type == "comment":
			Comment.objects.get(id=id).delete()

		return redirect('/wall')