from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
	if 'add' in session:
		session.pop('add')
	elif 'num_requests' in session:
		print(session['num_requests'])
		session['num_requests'] += 1
	else:
		session['num_requests'] = 1

	return render_template("index.html", num_requests=session['num_requests'])

@app.route('/reset', methods=['POST'])
@app.route('/destroy_session')
def reset():
	session.clear()
	return redirect ("/")

@app.route('/add', methods=['POST'])
def add():
	session['num_requests'] += 2
	session['add'] = True
	return redirect ("/")

if __name__ == "__main__":
    app.run(debug=True)