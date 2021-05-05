class Ninja {
	constructor (name, health=100) {
		this.name = name;
		this.health = health;
		this.speed = 3;
		this.strength = 3;
	}

	drinkSake() {
		this.health += 10;
	}

	sayName() {
		console.log(`My name is: ${this.name}`);
	}

	showStats() {
		console.log(`Name: ${this.name}, health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}
}

class Sensei extends Ninja {
	constructor(name, health=200) {
		super(name, health);
		this.wisdom = 10;
	}

	speakWisdom() {
		this.drinkSake();
		console.log("What one programmer can do in one month, two programmers can do in two months.");
	}
}

var marshall = new Ninja('Marshall Mathers', 69)
var cent = new Ninja('50 Cent', 50)
marshall.sayName()
marshall.drinkSake()
marshall.showStats()
cent.showStats()

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();