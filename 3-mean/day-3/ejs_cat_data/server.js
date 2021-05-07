var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
    response.render('cats');
})

var cat_array = [
	{id: 1, name: "Cuddles", food: "Catnip", age: "3", sleeping_spot: ['Roof', 'Window']}, 
	{id: 2, name: "Snuggles", food: "Parsley", age: "5", sleeping_spot: ['On the bed', 'On your lap']}, 
	{id: 3, name: "Buggles", food: "Tuna", age: "8", sleeping_spot: ['In a taco', 'On a rug']}, 
	{id: 4, name: "Wuggles", food: "Cheetos", age: "1", sleeping_spot: ['Under a car', 'On the porch']}
];

app.get("/cat/1", function (request, response){
    response.render('details', {cat: cat_array[0]});
})

app.get("/cat/2", function (request, response){
    response.render('details', {cat: cat_array[1]});
})

app.get("/cat/3", function (request, response){
    response.render('details', {cat: cat_array[2]});
})

app.get("/cat/4", function (request, response){
    response.render('details', {cat: cat_array[3]});
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})