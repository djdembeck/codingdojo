from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
	# init count if not exist
	if not session.get('count_total'):
		session['count_total'] = 0
	# If we are redirected from /add, don't count as new visit
	if 'add' in session:
		session.pop('add')
	elif 'num_requests' in session:
		session['num_requests'] += 1
	else:
		session['num_requests'] = 1

	return render_template("index.html", num_requests=session['num_requests'], num_counts=session['count_total'])

@app.route('/reset', methods=['POST'])
@app.route('/destroy_session')
def reset():
	session.clear()
	return redirect ("/")

@app.route('/add', methods=['POST'])
def add():
	# init increment to default if not exist
	if not session.get('increment_by'):
		session['increment_by'] = 2

	# First, check if new input from request.form and isn't blank
	if request.form['increment'] != '':
		print("Using form data for increment")
		session['increment_by'] = int(request.form['increment'])
	else:
		print(f"Using existing increment number: {session['increment_by']}")

	session['count_total'] += session['increment_by']
	session['add'] = True
	return redirect ("/")

if __name__ == "__main__":
	app.run(debug=True)