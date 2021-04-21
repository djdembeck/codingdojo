class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
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
		runner = this.tail;

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
}

var x = new SLLQueue();
console.log(x.isEmpty()) // return True
// test it yourself here tbh
// sorry not sorry

var a = new SLLQueue();
a.enqueue(7);
a.enqueue(3);
a.enqueue(11);

// console.log(a.dequeue())

var b = new SLLQueue();
b.enqueue(7);
b.enqueue(3);
b.enqueue(11);

console.log(a.compare(b)) // return true

var c = new SLLQueue();
c.enqueue(7);
c.enqueue(3);
c.enqueue(12);

console.log(a.compare(c)) // return false

var d = new SLLQueue();
d.enqueue(7);
d.enqueue(3);
d.enqueue(11);
d.enqueue(4);

console.log(a.compare(d)) // return false