// Rewrite the code the way it would be seen by the interpreter and predict the output.

// 1

var hello;
console.log(hello);
hello = 'world';

// 2

var needle;
needle = 'haystack';
test();
function test(){
	var needle;
	needle = 'magnet';
	console.log(needle);
}

// 3

var brendan;
brendan = 'super cool';
// Function is never called, so it's not re-arranged?
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// 4

var food;
food = 'chicken'
console.log(food);
eat();
function eat(){
	var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}

// 5

// Fails (expectedly?)
var mean;
mean();
console.log(food);
mean = function() {
	var food;
	food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);

// 6

var genre;
console.log(genre);
genre = "disco";
rewind();
function rewind() {
	var genre;
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);

// 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        let dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}