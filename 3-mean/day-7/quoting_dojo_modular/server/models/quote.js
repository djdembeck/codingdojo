const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
	author: {type: String, required: true, minlength: 6},
	text: {type: String, required: true, minlength: 20},
	created_at: Date
	})

// create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote