class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SLLStack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
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

		if (this.head == this.tail) {
			var temp = this.head;
			this.head = null;
			this.tail = null;
			return temp.value
		}

		var old_head = this.head;
		this.head = this.head.next

		return old_head.value
	}

	// top() - returns the top value without removing it
	top() {
		if (this.head == null) {
			return null;
		}

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

// a queue! first in, first out
// we add to the head of a queue but remove from the tail

class SLLQueue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	// enqueue(value) - adds the given value to the queue (at the head)
	enqueue(value) {
		var new_node = new ListNode(value);

		if (this.head == null) {
			this.head = new_node;
			this.tail = new_node;
		}
		
		else {
			new_node.next = this.head;
			this.head = new_node;
		}
	}

	// dequeue() - removes the front (tail) value from queue and returns it
	dequeue() {
		if (this.head == null) {
			return null;
		}

		if (this.head == this.tail) {
			var temp = this.head;
			this.head = null;
			this.tail = null;
			return temp.value
		}

		var runner = this.head;
		temp = this.tail;
		if (this.head == null || this.tail == null) {
			return undefined;
		}
		// 2nd to last's next will be tail
		while (runner.next.next != null) {
			runner = runner.next;
		}
		runner.next = null;
		this.tail = runner;

		return temp.value;
	}

	// front() - returns the front (tail) value without removing it
	front() {
		if (this.head == null) {
			return null;
		}

		return this.tail.value
	}

	// contains(target) - returns true if the target value is in the queue,
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

	// compare(other_queue) - return true if this queue and the other_queue
	// have the same values in the same order and false otherwise
	// do not modify either queue in this instance
	// remember:
	// var x = new ListNode(7);
	// var y = new ListNode(7);
	// x == y? false
	// x.value == y.value? true
	compare(other_queue) {
		// If sizes of queue aren't the same size, don't bother
		if (this.size() != other_queue.size()) {
			return false;
		}

		var runner = this.head;
		var runner2 = other_queue.head;
		while (runner != null && runner2 != null) {
			// Constantly compare values in order
			// If this fails at any point, they are not equal, so we fail it
			if (runner.value != runner2.value) {
				return false;
			}
			runner = runner.next
			runner2 = runner2.next
		}
		// Return true if above didn't fail
		return true;
	}

	// isPalindrome() - return true if the values of the queue form a palindrome,
	// and false otherwise. don't put the values of the queue into an array!
	// (or turn them into a string, either - your queue listnode values
	// may not always be able to be turned into a string)
	// do not modify the queue state in any way
	// also don't add some kind of tricky extra queue methods - they're not needs
	// maybe... use a stack? you'll need to copy that class into here
	// you ain't gotta tho nbd it's just a suggestion
	isPalindrome() {
		var temp_stack = new SLLStack();

		// Run through queue and add to stack
		var runner = this.head;
		while (runner != null) {
			temp_stack.push(runner.value);
			runner = runner.next;
		}

		runner = this.head;
		while (runner != null) {
			if (runner.value != temp_stack.pop()) {
				return false;
			}
			runner = runner.next
		}

		return true;
			}
}

var x = new SLLQueue();

x.enqueue(1);
x.enqueue(2);
x.enqueue(3);
x.enqueue(2);
x.enqueue(1);
console.log(x.isPalindrome()); // returns true

var y = new SLLQueue();

y.enqueue(1);
y.enqueue(2);
y.enqueue(3);
y.enqueue(3);
y.enqueue(2);
y.enqueue(1);
console.log(y.isPalindrome()); // returns true

var z = new SLLQueue();

z.enqueue(1);
z.enqueue(2);
z.enqueue(3);
z.enqueue(4);
z.enqueue(2);
z.enqueue(1);
console.log(z.isPalindrome()); // returns false

var w = new SLLQueue();
w.enqueue(true);
w.enqueue('hello!');
w.enqueue(7);
w.enqueue(7);
w.enqueue('hello!');
w.enqueue(true);
console.log(w.isPalindrome()); // returns true