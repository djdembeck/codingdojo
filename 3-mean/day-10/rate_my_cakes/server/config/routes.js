const cakes = require('../controllers/cakes')

module.exports = function(app) {
	app.get("/cakes", function (request, response){
		cakes.index(request, response);
	})
	app.get("/cakes/:id", function (request, response){
		cakes.show(request, response);
	})
	app.post("/cakes", function (request, response) {
		cakes.new_submit(request, response);
	})
	app.post("/cakes/:id", function (request, response) {
		cakes.new_rating(request, response);
	})
}