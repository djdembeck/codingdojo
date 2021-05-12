var express = require("express");
var app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user_1955', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	}, {timestamps: true})

// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get("/", function (request, response){
	User.find()
		.then(data => response.json(data))
		.catch(err => response.json(err));
})

app.get("/new/:name", function (request, response){
	const user = new User();
	user.name = request.params.name;
	user.save()
		.then(newUserData => {
			console.log('User created: ', newUserData)
			response.redirect('/');
			})
		.catch(err => {
			console.log(err)
			response.redirect('/');
		});
})

app.get("/remove/:name", function (request, response){
	User.deleteOne({name: request.params.name}, function (err) {
		if (err) console.log (err);
		console.log("Successful deletion")
		response.redirect('/');
	})
})

app.get("/:name", function (request, response) {
	User.find({name: request.params.name})
		.then(data => response.json(data))
		.catch(err => response.json(err));
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})