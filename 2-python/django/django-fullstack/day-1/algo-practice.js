class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// a stack! last in, first out
// we add/remove from the top of a stack

class SLLStack {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	// push(value) - adds the given value to the stack
	push(value) {
		var new_node = new ListNode(value);
		// determine if stack is empty or not
		// add new node at appropriate position
		if (this.head == null) {
			this.head = new_node;
			this.tail = new_node;
		}
		
		else {
			new_node.next = this.head;
			this.head = new_node;
		}
	}

	// pop() - removes the top value from stack and returns it
	pop() {
		if (this.head == null) {
			return null;
		}

		var old_head = this.head;
		var new_head = this.head.next;
		
		this.head = new_head

		return old_head.value
	}

	// top() - returns the top value without removing it
	top() {
		return this.head.value
	}

	// contains(target) - returns true if the target value is in the stack,
	// false if not
	contains(target) {
		var runner = this.head;

		while (runner != null) {
			if (runner.value == target) {
				return true;
			}
			runner = runner.next;
		}
		return false;
	}

	// isEmpty() - returns true if the stack is empty, false otherwise
	isEmpty() {
		if (this.head == null) {
			return true;
		}
		return false;
		// return (this.contents.length == 0)
	}

	// size() - returns the size of the stack
	size() {
		var runner = this.head;
		var counter = 0;

		while (runner != null) {
			counter += 1;
			runner = runner.next;
		}
		return counter;
	}
}

var x = new SLLStack();
console.log(x.isEmpty()); // returns true
x.push(3);
x.push(7);
x.push(4);
console.log(x.top()); // returns 4
console.log(x.pop()); // returns 4
x.push(11);
x.push(8);
console.log(x.contains(8)); // returns true
console.log(x.contains(23)); // returns false
x.pop();
console.log(x.contains(8)); // returns false
console.log(x.size()); // returns 3
console.log(x.isEmpty()); // returns false