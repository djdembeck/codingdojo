const pandas = require('../controllers/pandas')

module.exports = function(app) {
	app.get("/", function (request, response){
		pandas.index(request, response);
	})
	app.get("/pandas/new", function (request, response){
		pandas.new(request, response);
	})
	app.get("/pandas/:id", function (request, response){
		pandas.show(request, response);
	})
	app.get("/pandas/edit/:id", function (request, response){
		pandas.edit(request, response);
	})
	app.post("/pandas/:id", function (request, response) {
		pandas.edit_submit(request, response);
	})
	app.post("/pandas/destroy/:id", function (request, response) {
		pandas.destroy(request, response);
	})
	app.post("/pandas", function (request, response) {
		pandas.new_submit(request, response);
	})
}