class Bike {
	constructor(
		public price: number,
		public max_speed: string,
		public miles: number = 0,
		){}
	displayInfo(){
        console.log(`Price: ${this.price}, Max speed: ${this.max_speed}, Total miles: ${this.miles}`);
		return this;
    }
	ride(){
        console.log("Riding...");
		this.miles += 10;
		return this;
    }
	reverse(){
        console.log("Reversing...");
		if (this.miles - 5 >= 0) {
			this.miles -= 5;
		}
		return this;
    }
}
const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(300, "30mph");
const bike3 = new Bike(400, "35mph");

bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()