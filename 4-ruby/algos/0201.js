// SList: Reverse
// Reverse the node sequence. Given an SList object, the .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front.

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
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

	reverse() {
		let newArr = [];
		let runner = this.head;

		while (runner != null) {
			newArr.push(runner.val)
			runner = runner.next;
		}

		let newList = new SinglyLinkedList();
		let count = newArr.length
		
		while (count > 0) {
			count--
			newList.addBack(newArr[count])
		}

		return newList.printVals();
	}

	printVals() {
		if (this.isEmpty()) {
			console.log("This SLL is empty.")
			return this;
		} else {
			let runner = this.head;
			let output = `**********\n`
			while (runner) {
				output += `${runner.val} > `;
				runner = runner.next;
			}
			console.log(output);
		}
		return this;
	}
}

var x = new SinglyLinkedList();
x.addFront(1)
x.addFront(2)
x.addFront(3)
x.addFront(4)
x.printVals()
x.reverse()