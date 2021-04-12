from django.shortcuts import render, HttpResponse, redirect

def index(request):
	# init count if not exist
	if not 'count_total' in request.session:
		request.session['count_total'] = 0
	# If we are redirected from /add, don't count as new visit
	if 'add' in request.session:
		request.session.pop('add')
	elif 'num_requests' in request.session:
		request.session['num_requests'] += 1
	else:
		request.session['num_requests'] = 1

	context = {
		"num_requests": request.session['num_requests'],
		"num_counts": request.session['count_total'],

	}
	return render(request, "index.html", context)

def reset(request):
	del request.session['num_requests']
	del request.session['count_total']
	return redirect("/")

def add(request):
	# init increment to default if not exist
	if not 'increment_by' in request.session:
		request.session['increment_by'] = 2

	# First, check if new input from request.form and isn't blank
	if request.POST['increment'] != '':
		print("Using form data for increment")
		request.session['increment_by'] = int(request.POST['increment'])
	else:
		print(f"Using existing increment number: {request.session['increment_by']}")

	request.session['count_total'] += request.session['increment_by']
	request.session['add'] = True
	return redirect ("/")