from django.shortcuts import render, HttpResponse, redirect
import random

def index(request):
	if not 'rand_result' in request.session:
		request.session['rand_result'] = random.randrange(1, 100)
		print(request.session['rand_result'])
	return render(request, "index.html")

def take_a_guess(request):
	if not 'num_guesses' in request.session:
		request.session['num_guesses'] = 0
	if int(request.POST['guess']) > request.session['rand_result']:
		request.session['guess'] = "high"
		print("Booo, too high")
	elif int(request.POST['guess']) < request.session['rand_result']:
		print("Booo, too low")
		request.session['guess'] = "low"
	elif int(request.POST['guess']) == request.session['rand_result']:
		print(f"Nice guess ya fucking wanker: {request.session['rand_result']}")
		request.session['guess'] = "right"
	# Track user guesses
	request.session['num_guesses'] += 1
	return redirect ("/")

def reset(request):
	request.session.flush()
	return redirect("/")