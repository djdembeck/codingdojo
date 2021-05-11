var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'Must enter name'], minlength: 3},
	content: {type: String, required: [true, 'Comments must have content'], minlength: 10},
	}, {timestamps: true})

const PostSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'Must enter name'], minlength: 3},
	content: {type: String, required: [true, 'Posts must have content'], minlength: 10},
	comments: [CommentSchema]
	}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Post = mongoose.model('Post', PostSchema);

app.get("/", function (request, response){
	var errors = [];
	Post.find()
		.then(data => {
			for (var e of request.flash('errors')) {
				errors.push(e)
			}
			response.render("index", {posts: data, errors: errors})
		})
		.catch(err => response.json(err));
})

app.post("/post", function (request, response){
	const post = new Post();
	post.name = request.body.post_name;
	post.content = request.body.post_content;
	post.save()
		.then(newPostData => {
			console.log('Post created: ', newPostData)
			response.redirect('/');
			})
		.catch(err => {
			console.log(err)
			for (var key in err.errors) {
				request.flash('errors', err.errors[key].message);
			}
			response.redirect('/');
		});
})

app.post("/comment/:id", function (request, response){
	const comment = new Comment();
	comment.name = request.body.comment_name;
	comment.content = request.body.comment_content;
	comment.save()
		.then(newCommentData => {
			console.log('Comment created: ', newCommentData)
			Post.findOneAndUpdate({_id: request.params.id}, {$push: {comments: newCommentData}}, function(err,data){
				data.comments.push({data})
			})
			response.redirect('/');
			})
		.catch(err => {
			console.log(err)
			for (var key in err.errors) {
				request.flash('errors', err.errors[key].message);
			}
			response.redirect('/');
		});
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})