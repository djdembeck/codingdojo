from flask import Flask
from flask import render_template

app = Flask(__name__)

### Routes
@app.route('/')
def hello_world():
	return 'Hello World!'

@app.route('/dojo')
def dojo():
	return "Dojo!"

@app.route('/say/<expr>')
def say(expr):
	print(expr)
	return f"Hi, {expr}!"

@app.route('/repeat/<int:num>/<string:word>')
def repeat(num, word):
	return (word * num)

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."

### End routes

if __name__=="__main__":
	app.run(debug=True)