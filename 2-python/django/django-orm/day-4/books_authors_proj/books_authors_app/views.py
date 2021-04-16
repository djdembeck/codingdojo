from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.
def index(request):
	context = {
		"all_books": Book.objects.all(),
	}

	return render(request, "index.html", context)