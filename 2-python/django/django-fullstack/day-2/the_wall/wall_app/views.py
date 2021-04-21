from django.shortcuts import render, redirect
from main.models import User
from .models import Post, Comment

# Create your views here.
def feed(request):
	if 'userid' not in request.session:
		return redirect('/')

	context = {
		"this_user": User.objects.get(id=request.session['userid']),
		"all_posts": Post.objects.all().order_by('-created_at'),
	}
	return render(request, "feed.html", context)

def make_post(request):
	Post.objects.create(message=request.POST['post_contents'], user=User.objects.get(id=request.session['userid']))
	return redirect ('/wall')

def make_comment(request, parent_id):
	Comment.objects.create(comment=request.POST['comment_contents'], user=User.objects.get(id=request.session['userid']), message=Post.objects.get(id=parent_id))
	return redirect('/wall')

def delete(request, content_type, id):
	if content_type == "post":
		Post.objects.get(id=id).delete()
	if content_type == "comment":
		Comment.objects.get(id=id).delete()

	return redirect('/wall')