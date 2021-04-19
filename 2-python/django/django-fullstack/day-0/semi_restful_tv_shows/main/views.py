from django.shortcuts import render, redirect
from .models import Show

# Create your views here.

def new_show(request):

	return render(request, "create_show.html")

def add_show(request):
	new_show = Show.objects.create(title=request.POST['title'], network=request.POST['network'], release_date=request.POST['release_date'], desc=request.POST['description'])
	new_show.save()

	return redirect(f'/shows/{new_show.id}')

def show_details(request, id):
	return redirect('/')