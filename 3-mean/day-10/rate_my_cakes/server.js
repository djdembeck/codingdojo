var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app)

app.listen(8000, function() {
	console.log("listening on port 8000");
})