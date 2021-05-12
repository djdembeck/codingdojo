var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/client/views'); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash()); 

require('./server/config/routes.js')(app)

app.listen(8000, function() {
	console.log("listening on port 8000");
})