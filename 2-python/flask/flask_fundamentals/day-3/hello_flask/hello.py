from flask import Flask, render_template

app = Flask(__name__)

### Routes
@app.route('/')
def hello_world():
	return render_template('index.html')

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
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404

### End routes

if __name__=="__main__":
	app.run(debug=True)