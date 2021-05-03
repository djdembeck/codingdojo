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
	location: tigger
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

function move(direction) {
	if (player.location[direction]) {
		player.location = player.location[direction]
		console.log(`You are now at ${player.location.character}'s house`)
		player.location.greet();
	} else {
		console.log("Invalid direction")
	}
}