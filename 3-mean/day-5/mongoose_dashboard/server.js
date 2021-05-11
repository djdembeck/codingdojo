var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pandas', {useNewUrlParser: true});

const PandaSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	description: {type: String, required: true, minlength: 10},
	image_url: {type: String, required: true},
	created_at: Date
	})
   // create an object that contains methods for mongoose to interface with MongoDB
	const Panda = mongoose.model('Panda', PandaSchema);

app.get("/", function (request, response){
	Panda.find()
		.then(data => response.render("index", {pandas: data}))
		.catch(err => response.json(err));
})

app.get("/pandas/new", function (request, response){
		var errors = [];
	for (var e of request.flash('errors')) {
		errors.push(e)
	}
	response.render("new", {errors: errors})
})

app.get("/pandas/:id", function (request, response){
	Panda.find({_id: request.params.id})
		.then(data => response.render("details", {pandas: data}))
		.catch(err => response.json(err));
})

app.get("/pandas/edit/:id", function (request, response){
	Panda.find({_id: request.params.id})
		.then(data => response.render("edit", {pandas: data}))
		.catch(err => response.json(err));
})

app.post("/pandas/:id", function (request, response) {
	Panda.findOneAndUpdate({_id: request.params.id}, {
		name: request.body.panda_name,
		description: request.body.panda_description,
		image_url: request.body.panda_img
	})
		.then(editPanda => {
			console.log('panda updated: ', editPanda)
			response.redirect(`/pandas/${request.params.id}`);
		})
		.catch(err => {
			console.log(err)
			for (var key in err.errors) {
				request.flash('errors', err.errors[key].message);
			}
			response.redirect(`/pandas/edit/${request.params.id}`);
		});
})

app.post("/pandas/destroy/:id", function (request, response) {
	Panda.remove({_id: request.params.id})
		.then(delPanda => {
			console.log('panda deleted: ', delPanda)
			response.redirect('/');
		})
		.catch(err => {
			console.log(err)
			for (var key in err.errors) {
				request.flash('errors', err.errors[key].message);
			}
			response.redirect(`/pandas/${request.params.id}`);
		});
})

app.post("/pandas", function (request, response) {
	const panda = new Panda();
	panda.name = request.body.panda_name;
	panda.description = request.body.panda_description;
	panda.image_url = request.body.panda_img;
	panda.created_at = new Date()
	panda.save()
		.then(newPandaData => {
			console.log('panda created: ', newPandaData)
			response.redirect('/');
		})
		.catch(err => {
			console.log(err)
			for (var key in err.errors) {
				request.flash('errors', err.errors[key].message);
			}
			response.redirect('/pandas/new');
		});
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})