const quotes = require('../controllers/quotes')

module.exports = function(app){
	app.get("/", function (request, response){
		quotes.index(request, response);
	})
	app.post("/add_quote", function (request, response) {
		quotes.create(request, response);
	})
	app.get("/quotes", function (request, response){
		quotes.show(request, response);
	})
}