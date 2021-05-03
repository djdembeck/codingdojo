var bees = {
	character: "Bees",
	greet: function(){
		console.log("Bzzzzzzzzzzzzzzz")
	}
};
var robin = {
	character: "Christopher Robin",
	greet: function(){
		console.log("You’re braver than you believe, stronger than you seem and smarter than you think.")
	}
};
var eeyore = {
	character: "Eeyore",
	greet: function(){
		console.log("After all, one can’t complain. I have my friends.")
	}
};
var gopher = {
	character: "Gopher",
	greet: function(){
		console.log("Does a gopher have emotions?")
	}
};
var heff = {
	character: "Heff",
	greet: function(){
		console.log("Why me?")
	}
};
var kanga = {
	character: "Kanga",
	greet: function(){
		console.log("How can a loving god cause such misery?")
	}
};
var owl = {
	character: "Owl",
	greet: function(){
		console.log("If the string breaks, then we try another piece of string.")
	}
};
var piglet = {
	character: "Piglet",
	greet: function(){
		console.log("Oh d-d-d-d-dear! I wasn't expecting company!")
	}
};
var pooh = {
	character: "Winnie the Pooh",
	greet: function(){
		console.log("Oh bother")
	}
};
var rabbit = {
	character: "Rabbit",
	greet: function(){
		console.log("Tiggers never go on being sad.")
	}
};
var tigger = {
	character: "Tigger",
	greet: function(){
		console.log("The wonderful thing about tiggers is tiggers are wonderful things")
	}
};

var player = {
	location: tigger,
	honey: false,
}

// Tigger
tigger.north = pooh;

// pooh
pooh.west = piglet;
pooh.north = robin;
pooh.east = bees;
pooh.south = tigger;

// piglet
piglet.north = owl;
piglet.east = pooh;

// bees
bees.west = pooh;
bees.north = rabbit;

// robin
robin.west = owl;
robin.north = kanga;
robin.east = rabbit;
robin.south = pooh;

// owl
owl.east = robin;
owl.south = piglet;

// rabbit
rabbit.west = robin;
rabbit.east = gopher;
rabbit.south = bees;

// gopher
gopher.west = rabbit;

// kanga
kanga.north = eeyore;
kanga.south = robin;

// eeyore
eeyore.east = heff;
eeyore.south = kanga;

// heff
heff.west = eeyore;

function drop() {
	if (player.location.character == mission_call && player.honey) {
		console.log("You've won!")
		player.honey = false;
		player.location = tigger;
	} else if (player.location.character != mission_call) {
		console.log("You're not quite there yet...")
	} else if (player.honey === false){
		console.log("You don't have any honey :(")
	}
}

function mission() {
	char_arr = [robin, eeyore, gopher, heff, kanga, owl, piglet, pooh, rabbit, tigger]
	rand = Math.floor(Math.random() * (char_arr.length - 1))
	selected = char_arr[rand]
	console.log(selected)
	return selected.character;
}

function move(direction) {
	if (player.location[direction]) {
		player.location = player.location[direction]
		console.log(`You are now at ${player.location.character}'s house`)
		player.location.greet();
	} else {
		console.log("Invalid direction")
	}
}

function pickUp() {
	if (player.location.character == "Bees") {
		console.log("Picked up honey")
		player.honey = true;
	} else {
		console.log("No honey here...")
	}
}
mission_call = mission()
console.log(`${mission_call} needs honey!`)