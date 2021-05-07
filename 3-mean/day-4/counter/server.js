var express = require("express");
var session = require("express-session");
var app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.get("/", function (request, response){
	if (request.session.visits) {
		request.session.visits += 1;
	} else {
		request.session.visits = 1;
	}
	response.render('index', {visits: request.session.visits});
})

app.post("/add", function (request, response) {
	num = request.body['increment']
	if (num) {
		request.session.visits += (num - 1)
	} else {
		request.session.visits += (2 - 1)
	}
	response.redirect('/');
})

app.post("/reset", function (request, response) {
	request.session.visits = 0;
	response.redirect('/');
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})