from django.shortcuts import render, HttpResponse, redirect

def input(request):
	return render(request, "index.html")

def survey_results(request):
	print("Got Post Info....................")
	print(request.POST)
	form_name = request.POST['name']
	form_location = request.POST['location']
	# These don't need to be stored, as they are combined below in 'final_fav_langs'
	form_fav_lang_py = request.POST.get('python')
	form_fav_lang_mern = request.POST.get('mern')
	form_fav_lang_java = request.POST.get('java')
	form_fav_lang_csharp = request.POST.get('csharp')
	form_enjoyable = request.POST.get('answer')
	form_comment = request.POST['comments']

	fav_langs = {"Python": form_fav_lang_py, "MERN": form_fav_lang_mern, "Java": form_fav_lang_java, "C#": form_fav_lang_csharp}
	websel = []
	for selection in fav_langs:
		if fav_langs[selection] == "on":
			websel.append(selection)
	final_fav_langs = ', '.join(websel)
	
	context = {
		"form_name" : form_name,
		"form_location" : form_location,
		"final_fav_langs": final_fav_langs,
		"form_enjoyable": form_enjoyable,
		"form_comment": form_comment
    }

	return render(request,"show.html",context)