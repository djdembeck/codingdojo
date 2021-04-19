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
	new_book = Book.objects.create(title=request.POST['title'], desc=request.POST['description'])
	new_book.save()

	return redirect('/')

# def add_author(request):
	# 	# Author.objects.create(first_name="Jane", last_name="Austen")

	# return redirect('/authors')

def books(request, id):
	context = {
		"this_book": Book.objects.get(id=id),
	}

	return render(request, "show_book.html", context)

# def authors(request):

	# return render(request, "index.html", context)