var Author = require('../models/author.js')

module.exports = {
	all: function (request, response) {
		Author.find()
			.then(data => response.json(data))
			.catch(err => response.json(err));
	},
	create: function (request, response) {
		const author = new Author();
		author.name = request.body.name;
		author.save()
			.then(data => response.json(data))
			.catch(err => response.json(err));
	},
	show: function (request, response) {
		Author.findOne({_id: request.params.id})
			.then(data => response.json(data))
			.catch(err => response.json(err));
	},
	edit: function (request, response) {
		Author.updateOne({_id: request.params.id}, request.body)
			.then(data => response.json(data))
			.catch(err => response.json(err));
	},
	delete: function (request, response) {
		Author.deleteOne({_id: request.params.id})
			.then(data => response.json(data))
			.catch(err => response.json(err));
	},
}