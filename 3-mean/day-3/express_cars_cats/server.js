var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));

app.listen(8000, function() {
	console.log("listening on port 8000");
})