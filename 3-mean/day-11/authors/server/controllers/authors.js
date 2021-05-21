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
	create_q: function (request, response) {
		author = Author.findOne({_id: request.params.id})
			.then(author=> {
				quote = {content: request.body.content, votes: request.body.votes};
				author.quotes.push(quote)
				author.save()
					.then(data => response.json(data))
					.catch(err => response.json(err));
			})
			.catch(err => response.json(err));
	},
	delete_q: function (request, response) {
		const query = { _id: request.params.id }
		const updateDocument = {
			$pull: {"quotes": { "_id": request.params.quote}}
		};
		Author.updateOne(query, updateDocument)
			.then(data => response.json(data))
			.catch(err => console.log(err));
	},
	vote: function (request, response) {
		const query = { _id: request.params.id }
		const updateDocument = {
			$set: {"quotes.$[orderItem].votes": (parseInt(request.body.votes) + parseInt(request.params.increment))}
		};
		const options = {
			arrayFilters: [{
				"orderItem._id": request.body._id,
			}]
		};
		Author.updateOne(query, updateDocument, options)
			.then(data => response.json(data))
			.catch(err => console.log(err));
	},
}