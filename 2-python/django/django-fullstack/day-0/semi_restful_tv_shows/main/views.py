from django.shortcuts import render, redirect
from .models import Show

# Create your views here.
def root(request):
	return redirect('/shows')

def index(request):
	context = {
		"all_shows": Show.objects.all(),
	}
	return render(request, "index.html", context)

def new_show(request):
	return render(request, "create_show.html")

def add_show(request):
	new_show = Show.objects.create(title=request.POST['title'], network=request.POST['network'], release_date=request.POST['release_date'], desc=request.POST['description'])
	new_show.save()

	return redirect(f'/shows/{new_show.id}')

def show_details(request, id):
	context = {
		"this_show": Show.objects.get(id=id),
	}
	return render(request, "show_details.html", context)

def edit_show(request, id):
	context = {
		"this_show": Show.objects.get(id=id),
	}
	return render(request, "edit_show.html", context)

def update_show(request, id):
	show_to_update = Show.objects.get(id=id)
	show_to_update.title = request.POST['title']
	show_to_update.network = request.POST['network']
	show_to_update.release_date = request.POST['release_date']
	show_to_update.desc = request.POST['description']
	show_to_update.save()
	return redirect(f'/shows/{id}')

def del_show(request, id):
	show = Show.objects.get(id=id)
	show.delete()
	return redirect('/shows')