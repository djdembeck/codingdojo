var mongoose = require('../config/mongoose.js')

const AuthorSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	}, {timestamps: true})

// create an object that contains methods for mongoose to interface with MongoDB
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author