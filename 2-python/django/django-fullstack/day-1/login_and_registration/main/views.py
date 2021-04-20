from django.shortcuts import render,redirect
from .models import User
from django.contrib import messages
import bcrypt

# Create your views here.
def index(request):
	return render(request, "index.html")

def register(request):
	errors = User.objects.reg_validator(request.POST)
	if len(errors) > 0:
		for k, v in errors.items():
			messages.error(request, v)
		return redirect('/')
	else:
		password = request.POST['register_password']
		pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
		new_user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], birth_date=request.POST['birth_date'], email=request.POST['register_email'], password=pw_hash)
		new_user.save()
		request.session['userid'] = new_user.id
		
	return redirect('/success')

def login(request):
	errors = User.objects.login_validator(request.POST)
	if len(errors) > 0:
		for k, v in errors.items():
			messages.error(request, v)
		return redirect('/')
	else:
		email = User.objects.filter(email=request.POST['login_email'])
		if email:
			logged_email = email[0]
			if bcrypt.checkpw(request.POST['login_password'].encode(), logged_email.password.encode()):
				request.session['userid'] = logged_email.id
				return redirect('/success')
	
	return redirect('/')

def success(request):
	if 'userid' not in request.session:
		return redirect('/')

	context = {
		"this_user": User.objects.get(id=request.session['userid'])
	}
	return render(request, "success.html", context)

def logout(request):
	if 'userid' not in request.session:
		return redirect('/')
	
	del request.session['userid']
	return redirect('/')