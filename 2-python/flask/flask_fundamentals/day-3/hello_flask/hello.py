from flask import Flask

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

@app.route('/repeat/<num>/<word>')
def repeat(num, word):
	return (word * int(num))

### End routes

if __name__=="__main__":
	app.run(debug=True)