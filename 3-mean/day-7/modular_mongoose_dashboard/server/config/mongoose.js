const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pandas', {useNewUrlParser: true});

module.exports = mongoose