class PriQNode {
	constructor(val, pri=2) {
		this.val = val;
		this.next = null;
		this.pri = pri;
	}
}

class PriQueue {
	constructor() {
		this.head = null;
	}

	addToFront(val, pri=2) {
		var newNode = new PriQNode(val, pri);
		if (this.head == null) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		console.log("Value added to front.");
		this.printList();
	}

	push(val, pri) {
		const newNode = new PriQNode(val, pri);

		if (!this.head) {
			this.head = newNode;
			console.log("No head; created a list.")
			this.printList();
			return this;
		}
		if (pri < this.head.pri) {
			this.addToFront(val, pri);
		} else {
			let runner = this.head;
			while (runner.next && pri > runner.next.pri) {
				runner = runner.next;
			}
			newNode.next = runner.next;
			runner.next = newNode;
			console.log("Value added in-place.")
			this.printList();
		}
		return this;
	}

	printList() {
		var output = "";
		var runner = this.head;
		while (runner != null) {
			output += " | " + runner.val + ":" + runner.pri + " | ->";
			runner = runner.next;
		}
		console.log(output);
		return output;
	}
}

let test = new PriQueue();
test.addToFront(3,1);
test.addToFront(5,2);
test.addToFront(8,3);
test.addToFront(9,4);
test.push(0, 5);