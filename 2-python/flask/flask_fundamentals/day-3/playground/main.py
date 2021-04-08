from flask import Flask, render_template

app = Flask(__name__)

### routes

@app.route('/play/<int:num>/<string:color>')
def play(num=3, color="blue"):
	return render_template('index.html', num=num, color=color)

### end routes

if __name__=="__main__":
	app.run(debug=True)