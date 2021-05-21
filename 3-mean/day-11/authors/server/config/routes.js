const authors = require('../controllers/authors')

module.exports = function(app){
	app.get("/authors", function (request, response){
		authors.all(request, response);
	})
	app.post("/authors", function (request, response) {
		authors.create(request, response);
	})
	app.get("/authors/:id", function (request, response){
		authors.show(request, response);
	})
	app.put("/authors/:id", function (request, response){
		authors.edit(request, response);
	})
	app.delete("/authors/:id", function (request, response){
		authors.delete(request, response);
	})
	app.get("/authors/quotes/:id", function (request, response){
		authors.all(request, response);
	})
	app.get("/authors/write/:id", function (request, response){
		authors.all(request, response);
	})
	app.post("/authors/write/:id", function (request, response) {
		authors.create_q(request, response);
	})
	app.delete("/authors/write/:id/:quote", function (request, response){
		authors.delete_q(request, response);
	})
	app.put("/authors/write/:id/:increment", function (request, response) {
		authors.vote(request, response);
	})
}