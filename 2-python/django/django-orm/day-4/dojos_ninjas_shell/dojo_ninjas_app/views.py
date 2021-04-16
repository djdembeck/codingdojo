from django.shortcuts import render, redirect
from .models import Dojo, Ninja

# Create your views here.
def index(request):
	context = {
		"all_the_dojos": Dojo.objects.all()
	}

	return render(request, "index.html", context)

def add_dojo(request):
	# Dojo.objects.create(name="Best", city="Dallas", state="TX")
	new_user = Users.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email_address=request.POST['email_address'],age=int(request.POST['age']))
	new_user.save()
	return redirect('/')

def add_ninja(request):
	# Ninja.objects.create(first_name="Apollo", last_name="Zuesson", location=Dojo.objects.get(id=5))
	return redirect('/')