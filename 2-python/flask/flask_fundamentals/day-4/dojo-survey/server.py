from flask import Flask, render_template, request, redirect
app = Flask(__name__)

# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def survey_result():
	print("Got Post Info")
	print(request.form)
	form_name = request.form['name']
	form_location = request.form['location']
	form_fav_lang_py = request.form.get('python')
	form_fav_lang_mern = request.form.get('mern')
	form_fav_lang_java = request.form.get('java')
	form_fav_lang_csharp = request.form.get('csharp')
	form_enjoyable = request.form.get('answer')
	form_comment = request.form['comments']

	fav_langs = {"Python": form_fav_lang_py, "MERN": form_fav_lang_mern, "Java": form_fav_lang_java, "C#": form_fav_lang_csharp}
	websel = []
	for selection in fav_langs:
		if fav_langs[selection] == "on":
			websel.append(selection)
	final_fav_langs = ', '.join(websel)

	return render_template("show.html", form_name=form_name, form_location=form_location, final_fav_langs=final_fav_langs, form_enjoyable=form_enjoyable, form_comment=form_comment)

if __name__ == "__main__":
    app.run(debug=True)