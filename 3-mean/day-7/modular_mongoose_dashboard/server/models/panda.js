var mongoose = require('../config/mongoose.js')

const PandaSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	description: {type: String, required: true, minlength: 10},
	image_url: {type: String, required: true},
	created_at: Date
	})

// create an object that contains methods for mongoose to interface with MongoDB
const Panda = mongoose.model('Panda', PandaSchema);

module.exports = Panda