class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.child = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
	}

	populateRandom(max, length) {
		for (let i = 1; i <= length; i++) {
			let temp = Math.floor(Math.random() * max) + 1;
			this.addFront(temp);
		}
		return this;
	}

	addFront(val) {
		const newHead = new Node(val);
		newHead.next = this.head;
		this.head = newHead;
		return this;
	}

	addBack(val) {
		const newTail = new Node(val);
		let runner = this.head;

		if (runner === null) {
			this.head = newTail;
		} else {
			while (runner.next) {
				runner = runner.next;
			}
			runner.next = newTail;
		}

		return this;
	}

	isEmpty() {
		return this.head === null;
	}

	printVals() {
		if (this.isEmpty()) {
			console.log("This SLL is empty.");
			return this;
		} else {
			let runner = this.head;
			let output = "";
			while (runner) {
				output += `${runner.val} > `;
				runner = runner.next;
			}
			console.log(output);
		}
		return this;
	}

	makeChild(head, node) {
		let count = 0;
		let runner = this.head;
		while (count < node) {
			runner = runner.next;
			count++;
		}
		runner.child = head;
		return this;
	}

	flatten2() {
		if (this.isEmpty()) {
			console.log("This SLL is empty.");
			return this;
		}
		let runner = this.head;
		let storageStack = [];
		while (runner) {
			if (runner.child) {
				storageStack.push(runner.next);
				let childRunner = runner.child;
				while (childRunner.next) {
					childRunner = childRunner.next;
				}
				runner.next = runner.child;
				runner.child = null;
				childRunner.next = storageStack.pop();
			}
			runner = runner.next;
		}
		return this;
	}

	unFlatten() {
		let runner = this.head;
		let count = 0;
		let mySLL = new SinglyLinkedList();
		let yourSLL = new SinglyLinkedList();
		let herSLL = new SinglyLinkedList();
		let hisSLL = new SinglyLinkedList();
		let sllArr = [mySLL, yourSLL, herSLL, hisSLL];
		let index = 0;
		while (runner) {
			if (count % 5 == 0) {
				console.log("Creating new SLL");
				var thisJuan = sllArr[index];
				index++;
			}
			console.log(count, runner.val);
			thisJuan.addBack(runner.val);
			count++;
			runner = runner.next;
		}
		console.log(sllArr);
		return sllArr;
	}
}

mySLL = new SinglyLinkedList();
yourSLL = new SinglyLinkedList();
herSLL = new SinglyLinkedList();
hisSLL = new SinglyLinkedList();

console.log("mySLL:");
mySLL.populateRandom(20, 5).printVals();
console.log("yourSLL:");
yourSLL.populateRandom(20, 5).printVals();
console.log("herSLL:");
herSLL.populateRandom(20, 5).printVals();
console.log("hisSLL:");
hisSLL.populateRandom(20, 5).printVals();

mySLL
	.makeChild(yourSLL.head, 1)
	.makeChild(herSLL.head, 2)
	.makeChild(hisSLL.head, 3);
mySLL.flatten2();
console.log("mySLL after flatten:");
mySLL.unFlatten();
