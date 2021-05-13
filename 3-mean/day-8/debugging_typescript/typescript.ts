// Fix the errors in the Playground so that all the red bars are gone and the code still runs as desired.
// Make comments in the code to explain what each error was and how you fixed it.

// 1. Setting types
var myString: string|number;
myString = "Bee stinger";
myString = 9;
// Set type to allow for number

// 2. Setting the types for function parameters
function sayHello(name: string|number){
	return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
console.log(sayHello(9));
// Set type to allow for number

// 3. Optional parameters
function fullName(firstName: string, lastName: string, middleName: string = ""){
	let fullName = `${firstName} ${middleName} ${lastName}`;
	return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));
// Set default value for middle name

// 4. Interfaces and function parameters
interface Student {
	firstName: string;
	lastName: string;
	belts: number;
}
function graduate(ninja: Student){
	return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
	firstName: "Christine",
	lastName: "Yang",
	belts: 2
}
const jay = {
	firstName: "Jay",
	lastName: "Patel",
	belts: 4
}
console.log(graduate(christine));
console.log(graduate(jay));
// misspelling of belts

// 5. Classes and function parameters
class Ninja {
	fullName: string;
	constructor(
		public firstName: string,
		public lastName: string){
			this.fullName = `${firstName} ${lastName}`;
	}
	debug(){
		console.log("Console.log() is my friend.")
	}
}
const shane = new Ninja("Shane", "Thompson");
const turing = new Ninja("Alan", "Turing")
function study(programmer: Ninja){
	return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));
// need to set name in class call, fix from dict

// 6. Arrow functions
var increment = (x:number) => x + 1;
console.log(increment(3));
var square = (x:number) => x * x;
console.log(square(4));
var multiply = (x:number, y:number) => x * y;
var math = (x:number, y:number) => {  
	let sum = x + y;
	let product = x * y;
	let difference = Math.abs(x-y);
	return [sum, product, difference];
}
// set var types, fix function calls

// 7. Arrow functions and 'this'
class Elephant {
	constructor(public age: number){}
	birthday = () => {
		this.age++;
	}
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
	console.log(`Babar's age is ${babar.age}.`)
	}, 2000)
// Fix function call from word