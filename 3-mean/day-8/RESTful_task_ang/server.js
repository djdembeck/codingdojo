var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks', {useNewUrlParser: true});

const TaskSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 3},
	description: {type: String, required: true, minlength: 10},
	completed: {type: Boolean, default: false},
	}, {timestamps: true})

const Task = mongoose.model('Task', TaskSchema);

// retrieve all
app.get("/tasks", function (request, response){
	Task.find()
		.then(data => response.json(data))
		.catch(err => response.json(err));
})

// retrieve one
app.get("/tasks/:id", function (request, response){
	Task.find({_id: request.params.id})
		.then(data => response.json(data))
		.catch(err => response.json(err));
})

// create one
app.post("/tasks", function (request, response){
	const task = new Task();
	task.title = request.body.title;
	task.description = request.body.description;
	task.save()
		.then(newTaskData => {
			console.log('Task created: ', newTaskData)
			response.json(newTaskData)
			})
		.catch(err => {
			console.log(err)
			response.json(err)
		});
})

// update one
app.put("/tasks/:id", function (request, response){
	Task.findOneAndUpdate({_id: request.params.id}, {
		title: request.body.title,
		description: request.body.description,
		completed: request.body.completed
	})
		.then(editTaskData => {
			console.log('Task updated: ', editTaskData)
			response.json(editTaskData)
			})
		.catch(err => {
			console.log(err)
			response.json(err)
		});
})

// delete one
app.delete("/tasks/:id", function (request, response){
	Task.deleteOne({_id: request.params.id})
		.then(data => {
			console.log('Task deleted: ', data)
			response.json(data)
			})
		.catch(err => {
			console.log(err)
			response.json(err)
		});
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})