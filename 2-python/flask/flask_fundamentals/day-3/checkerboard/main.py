from flask import Flask, render_template

app = Flask(__name__)

### routes

@app.route('/', defaults={'x': 8, 'y': 8, 'color0': "red", 'color1': "black"})
@app.route('/<int:x>', defaults={'y': 8, 'color0': "red", 'color1': "black"})
@app.route('/<int:x>/<int:y>', defaults={'color0': "red", 'color1': "black"})
@app.route('/<int:x>/<int:y>/<string:color0>', defaults={'color1': "black"})
@app.route('/<int:x>/<int:y>/<string:color0>/<string:color1>')
def makeboard(x, y, color0, color1):
	return render_template('index.html', x=x, y=y, color0=color0, color1=color1)

### end routes

if __name__=="__main__":
	app.run(debug=True)