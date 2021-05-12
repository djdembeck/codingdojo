const mongoose = require('mongoose'),
	Quote = mongoose.model('Quote')

module.exports = function(app){
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
}