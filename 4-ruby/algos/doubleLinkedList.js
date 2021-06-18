class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

// DList Class
// Given the above reference implementations for doubly linked node and doubly linked list, can you construct the rest of a basic DList class? This would include DList methods push(), pop(), front(), back(), contains(), and size().

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	isEmpty() {
		return this.head === null;
	}

	// push - push a new node to the end of the list
	push(val) {
		const newTail = new Node(val);
		if (this.isEmpty()) {
			this.head = newTail;
		} else {
			this.tail.next = newTail;
			newTail.prev = this.tail;
		}
		this.tail = newTail;
		return this;
	}

	// pop - pops the tail off and returns the value
	pop() {
		if (this.isEmpty()) {
			console.log(null);
			return null;
		} else {
			const popVal = this.tail.val;
			this.tail = this.tail.prev;
			this.tail.next = null;
			console.log(popVal);
			return popVal;
		}
	}

	// front - return the value at the head, but does not remove it
	front() {
		return this.head.val;
	}

	// back - return the value at the tail, but does not remove it
	back() {
		return this.tail.val;
	}

	// contains - returns true if a given value is in the list, false if it is not
	contains(val) {
		if (this.isEmpty()) {
			console.log("This DLL is empty.");
		} else {
			let runner = this.head;
			while (runner) {
				if (runner.val === val) {
					console.log(`Value ${val} found.`);
					return true;
				}
				runner = runner.next;
			}
			console.log(`Value ${val} not found.`);
			return false;
		}
	}

	// size - returns the number of nodes in the list
	size() {
		let count = 0;
		let runner = this.head;
		while (runner) {
			count++;
			runner = runner.next;
		}
		console.log(`This list has ${count} node(s)`);
		return count;
	}

	printVals() {
		if (this.isEmpty()) {
			console.log("This DLL is empty.");
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
}

const myDLL = new DoublyLinkedList();
myDLL.push(3).push(5).push(7).push(4);
myDLL.printVals();
myDLL.size();
