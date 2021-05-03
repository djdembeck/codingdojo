var bees = {character: "bees"};
var christopher = {character: "christopher"};
var eeyore = {character: "eeyore"};
var gopher = {character: "gopher"};
var heff = {character: "heff"};
var kanga = {character: "kanga"};
var owl = {character: "owl"};
var piglet = {character: "piglet"};
var pooh = {character: "pooh"};
var rabbit = {character: "rabbit"};
var tigger = {character: "tigger"};

// Tigger
tigger.north = pooh;

// pooh
pooh.west = piglet;
pooh.north = christopher;
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