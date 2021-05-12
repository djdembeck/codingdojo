var Panda = require('../models/panda.js')

module.exports = {
	index: function (request, response){
		Panda.find()
			.then(data => response.render("index", {pandas: data}))
			.catch(err => response.json(err));
	},
	new: function (request, response){
			var errors = [];
		for (var e of request.flash('errors')) {
			errors.push(e)
		}
		response.render("new", {errors: errors})
	},
	show: function (request, response){
		Panda.find({_id: request.params.id})
			.then(data => response.render("details", {pandas: data}))
			.catch(err => response.json(err));
	},
	edit: function (request, response){
		Panda.find({_id: request.params.id})
			.then(data => response.render("edit", {pandas: data}))
			.catch(err => response.json(err));
	},
	edit_submit: function (request, response) {
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
	},
	destroy: function (request, response) {
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
	},
	new_submit: function (request, response) {
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
	},
}