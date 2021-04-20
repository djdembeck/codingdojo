from django.shortcuts import render, redirect

# Create your views here.
def feed(request):
	return render(request, "feed.html")