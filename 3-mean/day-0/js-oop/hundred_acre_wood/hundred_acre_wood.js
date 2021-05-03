var bees = {character: "Bees"};
var robin = {character: "Christopher Robin"};
var eeyore = {character: "Eeyore"};
var gopher = {character: "Gopher"};
var heff = {character: "Heff"};
var kanga = {character: "Kanga"};
var owl = {character: "Owl"};
var piglet = {character: "Piglet"};
var pooh = {character: "Winnie the Pooh"};
var rabbit = {character: "Rabbit"};
var tigger = {character: "Tigger"};

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
	} else {
		console.log("Invalid direction")
	}
}