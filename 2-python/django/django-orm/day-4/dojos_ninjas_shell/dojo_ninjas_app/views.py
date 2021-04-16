from django.shortcuts import render, redirect
from .models import Dojo, Ninja

# Create your views here.
def index(request):
	context = {
		"all_the_dojos": Dojo.objects.all(),
	}

	return render(request, "index.html", context)

def add_dojo(request):
	# Dojo.objects.create(name="Best", city="Dallas", state="TX")
	new_dojo = Dojo.objects.create(name=request.POST['dojo_name'],city=request.POST['city'],state=request.POST['state'])
	new_dojo.save()
	return redirect('/')

def add_ninja(request):
	# Ninja.objects.create(first_name="Apollo", last_name="Zuesson", location=Dojo.objects.get(id=5))
	new_ninja = Ninja.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],location = Dojo.objects.get(id=request.POST['dojo_id']))
	new_ninja.save()
	return redirect('/')