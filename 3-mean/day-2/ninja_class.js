// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja

function Ninja(name, health=100) {
	this.name = name;
	this.health = health;
	var speed = 3;
	var strength = 3;

	this.showStats = function() {
		console.log(`Name: ${this.name}, health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
	}
}

Ninja.prototype.sayName = function() {
	console.log(`My name is: ${this.name}`)
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
}

var marshall = new Ninja('Marshall Mathers', 69)
marshall.sayName()
marshall.drinkSake()
marshall.showStats()