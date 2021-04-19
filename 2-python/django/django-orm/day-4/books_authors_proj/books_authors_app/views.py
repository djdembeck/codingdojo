from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.
def index(request):
	context = {
		"all_books": Book.objects.all(),
		"all_authors": Author.objects.all(),
	}

	return render(request, "index.html", context)

def add_book(request):
	# Book.objects.create(title="C Sharp")
	form_title = request.POST['title']
	form_description = request.POST['description']
	Book.objects.create(title=form_title, description=form_description)

	return redirect('/')

	# def add_author(request):
	# 	# uthor.objects.create(first_name="Jane", last_name="Austen")

	# return redirect('/authors')

	# def books(request):

	# return render(request, "index.html", context)

	# def authors(request):

	# return render(request, "index.html", context)