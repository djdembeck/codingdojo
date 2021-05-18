const {Rating, Cake} = require('../models/cake.js')

module.exports = {
	index: function (request, response){
		Cake.find()
			.then(data => response.json(data))
			.catch(err => response.json(err));
	},
	show: function (request, response){
		Cake.find({_id: request.params.id})
			.then(data => response.json(data))
			.catch(err => response.json(err));
	},
	new_submit: function (request, response) {
		const cake = new Cake();
		cake.baker = request.body.baker;
		cake.img = request.body.img;
		cake.desc = request.body.desc;
		cake.save()
			.then(newCakeData => {
				console.log('Cake created: ', newCakeData)
				response.redirect('/cakes');
			})
			.catch(err => {
				console.log(err)
				for (var key in err.errors) {
					request.flash('errors', err.errors[key].message);
				}
				response.redirect('/cakes/new');
			});
	},
	new_rating: function (request, response) {
		const rating = new Rating();
		rating.stars = request.body.stars;
		rating.content = request.body.content;
		rating.save()
			.then(newRatingData => {
				console.log('Rating created: ', newRatingData)
				Cake.findOneAndUpdate({_id: request.params.id}, {$push: {ratings: newRatingData}}, function(err,data){
					data.ratings.push({data})
				})
				response.redirect('/cakes');
				})
			.catch(err => {
				console.log(err)
				response.redirect('/cakes');
			});
	},
}