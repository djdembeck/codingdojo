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
}