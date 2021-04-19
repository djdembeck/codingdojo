from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.
def index(request):
	context = {
		"all_books": Book.objects.all(),
		"all_authors": Author.objects.all(),
	}

	return render(request, "index.html", context)

def author_index(request):
	context = {
		"all_books": Book.objects.all(),
		"all_authors": Author.objects.all(),
	}

	return render(request, "author_index.html", context)

def add_book(request):
	# Book.objects.create(title="C Sharp")
	new_book = Book.objects.create(title=request.POST['title'], desc=request.POST['description'])
	new_book.save()

	return redirect('/')

def add_author(request):
		# Author.objects.create(first_name="Jane", last_name="Austen")
	new_author = Author.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], notes=request.POST['notes'],)
	new_author.save()

	return redirect('/author')

def books(request, id):
	context = {
		"this_book": Book.objects.get(id=id),
		"all_authors": Author.objects.all()
	}

	return render(request, "show_book.html", context)

def add_author_to_book(request, id):
	this_book = Book.objects.get(id=id)
	this_author = Author.objects.get(id=request.POST['author_id'])
	this_book.authors.add(this_author)
	this_book.save()
	
	return redirect(f'/books/{id}')

def authors(request, id):
	context = {
		"this_author": Author.objects.get(id=id),
		"all_books": Book.objects.all()
	}

	return render(request, "show_author.html", context)

def add_book_to_author(request, id):
	this_book = Book.objects.get(id=request.POST['author_id'])
	this_author = Author.objects.get(id=id)
	this_author.books.add(this_book)
	this_author.save()
	
	return redirect(f'/authors/{id}')