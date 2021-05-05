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

// Ninja Class II

// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

function Ninja(name, health=100) {
	this.name = name;
	this.health = health;
	var speed = 3;
	var strength = 3;
	self = this;

	this.showStats = function() {
		console.log(`Name: ${this.name}, health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
	}

	this.punch = function(id) {
		if (id instanceof Ninja) {
			id.health -= 5
			console.log(`${id.name} was punched by ${this.name} and lost 5 health!`)
		}
	}
	this.kick = function(id) {
		if (id instanceof Ninja) {
			damage = (15 * strength)
			id.health -= damage
			console.log(`${id.name} was kicked by ${this.name} and lost ${damage} health!`)
		}
	}
}

Ninja.prototype.sayName = function() {
	console.log(`My name is: ${this.name}`)
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
}

var marshall = new Ninja('Marshall Mathers', 69)
var cent = new Ninja('50 Cent', 50)
marshall.sayName()
marshall.drinkSake()
marshall.showStats()
marshall.punch(cent)
marshall.kick(cent)
cent.showStats()
cent.kick(marshall)