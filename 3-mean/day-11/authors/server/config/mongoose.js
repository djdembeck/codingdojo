const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});

module.exports = mongoose