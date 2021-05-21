var express = require("express");
var app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({extended: true}));

require('./server/config/routes.js')(app)

app.all("*", (request, response, next) => {
	response.sendFile(__dirname + "/public/dist/public/index.html")
});

app.listen(8000, function() {
	console.log("listening on port 8000");
})