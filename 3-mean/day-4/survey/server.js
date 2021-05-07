var express = require("express");
var session = require("express-session");
var app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

app.get("/", function (request, response){
	if (request.session.visits) {
		request.session.visits += 1;
	} else {
		request.session.visits = 1;
	}
	response.render('index', {visits: request.session.visits});
})

app.post("/result", function (request, response) {
	response.render('result', {form: request.body});
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})