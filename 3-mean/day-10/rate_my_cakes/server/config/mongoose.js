const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakes', {useNewUrlParser: true});

module.exports = mongoose