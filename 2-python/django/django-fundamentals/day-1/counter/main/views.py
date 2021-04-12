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

# @app.route('/reset', methods=['POST'])
# @app.route('/destroy_session')
# def reset():
# 	session.clear()
# 	return redirect ("/")

# @app.route('/add', methods=['POST'])
# def add():
# 	# init increment to default if not exist
# 	if not session.get('increment_by'):
# 		session['increment_by'] = 2

# 	# First, check if new input from request.form and isn't blank
# 	if request.form['increment'] != '':
# 		print("Using form data for increment")
# 		session['increment_by'] = int(request.form['increment'])
# 	else:
# 		print(f"Using existing increment number: {session['increment_by']}")

# 	session['count_total'] += session['increment_by']
# 	session['add'] = True
# 	return redirect ("/")