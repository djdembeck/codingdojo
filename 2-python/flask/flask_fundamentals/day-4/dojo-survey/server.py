from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def survey_result():
	print("Got Post Info")
	print(request.form)
	session['form_name'] = request.form['name']
	session['form_location'] = request.form['location']
	# These don't need to be stored, as they are combined below in 'final_fav_langs'
	form_fav_lang_py = request.form.get('python')
	form_fav_lang_mern = request.form.get('mern')
	form_fav_lang_java = request.form.get('java')
	form_fav_lang_csharp = request.form.get('csharp')
	session['form_enjoyable'] = request.form.get('answer')
	session['form_comment'] = request.form['comments']

	fav_langs = {"Python": form_fav_lang_py, "MERN": form_fav_lang_mern, "Java": form_fav_lang_java, "C#": form_fav_lang_csharp}
	websel = []
	for selection in fav_langs:
		if fav_langs[selection] == "on":
			websel.append(selection)
	session['final_fav_langs'] = ', '.join(websel)

	return redirect ("/show")

@app.route("/show")
def show_result():
	print(request.form)
	return render_template("show.html", form_name=session['form_name'], form_location=session['form_location'], final_fav_langs=session['final_fav_langs'], form_enjoyable=session['form_enjoyable'], form_comment=session['form_comment'])

if __name__ == "__main__":
    app.run(debug=True)