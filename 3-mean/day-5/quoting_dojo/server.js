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
mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
	author: {type: String, required: true, minlength: 6},
	text: {type: String, required: true, minlength: 20},
	created_at: Date
	})
   // create an object that contains methods for mongoose to interface with MongoDB
	const Quote = mongoose.model('Quote', QuoteSchema);

app.get("/", function (request, response){
	var errors = [];
	for (var e of request.flash('errors')) {
		errors.push(e)
	}
	response.render("index", {errors: errors})
})

app.post("/add_quote", function (request, response) {
	const quote = new Quote();
	quote.author = request.body.quote_author;
	quote.text = request.body.quote_text;
	quote.created_at = new Date()
	quote.save()
		.then(newQuoteData => {
			console.log('quote created: ', newQuoteData)
			response.redirect('/quotes');
		})
		.catch(err => {
			console.log(err)
			for (var key in err.errors) {
				request.flash('errors', err.errors[key].message);
			}
			response.redirect('/');
		});
})

app.get("/quotes", function (request, response){
	Quote.find()
		.then(data => response.render("quotes", {quotes: data}))
		.catch(err => response.json(err));
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})