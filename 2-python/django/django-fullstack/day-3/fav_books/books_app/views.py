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
		"all_books": Book.objects.all()
	}
	return render(request, "front_page.html", context)

def new_book(request):
	# Don't even process if user isn't signed in
	if 'userid' not in request.session:
		return redirect('/')

	errors = Book.objects.book_validator(request.POST)

	if len(errors) > 0:
		for k, v in errors.items():
			messages.error(request, v)
		return redirect('/books')
	else:
		Book.objects.create(
			title=request.POST['book_title'],
			description=request.POST['book_description'],
			uploaded_by=User.objects.get(id=request.session['userid'])
			)

		user = User.objects.get(id=request.session['userid'])
		new_fav = Book.objects.last()

		new_fav.users_who_like.add(user)

	return redirect("/books")

def book_details(request, id):
	context = {
		"all_users": User.objects.all(),
		"this_user": User.objects.get(id=request.session['userid']),
		"this_book": Book.objects.get(id=id),
		"liked_by": Book.objects.first().users_who_like.all()
		}
	return render(request, "book_details.html", context)

def add_favorite(request, id):
	user = User.objects.get(id=request.session['userid'])
	new_fav = Book.objects.get(id=id)

	new_fav.users_who_like.add(user)
	return redirect(f'/books/{id}')

def un_favorite(request, id):
	user = User.objects.get(id=request.session['userid'])
	new_fav = Book.objects.get(id=id)

	new_fav.users_who_like.remove(user)
	return redirect(f'/books/{id}')

def delete_book(request, id):
	# Don't even process if user isn't signed in
	if 'userid' not in request.session:
		return redirect('/')

	errors = Book.objects.deletion_validator(id, request.session['userid'])

	if len(errors) > 0:
		for k, v in errors.items():
			messages.error(request, v)
		return redirect('/books')
	else:
		Book.objects.get(id=id).delete()

	return redirect('/books')

def update_book(request, id):
	errors = Book.objects.book_validator(request.POST)

	if len(errors) > 0:
		for k, v in errors.items():
			messages.error(request, v)
		return redirect(f'/books/{id}')
	else:
		book = Book.objects.get(id=id)
		book.title = request.POST['book_title']
		book.description = request.POST['book_description']
		book.save()

	return redirect(f'/books/{id}')