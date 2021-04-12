// singly linked lists
// ListNode class: we'll be using this

class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	  // this.prev = null; - for doubly-linked lists
	}
}

// var new_node = new ListNode(7);
// var second_node = new ListNode(3);
// new_node.next = second_node;
// var third_node = new ListNode(4);
// second_node.next = third_node;
// console.log(new_node.next.next.value);


// and our SLL class
// we'll be using this... all week
// have you been saving what you do for algos locally if you're not
// the person writing it? maybe you should be?

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	// all our methods go here:
	// addToFront(value)
	// create a new node with the given value and make it
	// the head of the list
	addToFront(value) {
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

	// addToBack(value)
	// create a new node with the given value and make it
	// the new tail of the list
	addToBack(value) {
		var new_node = new ListNode(value);

		if (this.head == null) {
			this.head = new_node;
			this.tail = new_node;
		}

		else {
			this.tail.next = new_node;
			this.tail = new_node;
		}
	}

	// display()
	// return a string with the value of every node from the
	// linked list - like "3 - 7 - 13 - 4 - 8"
	display() {

		if (this.head == null) {
			return null;
		}

		var output = this.head.value;
		var runner = this.head.next;

		while (runner != null) {
			output += " - " + runner.value;
			runner = runner.next;
		}

		return output;
	}

	// contains(target)
	// return true if the linked list contains a node with the
	// given value and false otherwise
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
}

var new_SLL = new SinglyLinkedList();
new_SLL.addToBack(7);
new_SLL.addToBack(3);
new_SLL.addToFront(2);
new_SLL.addToFront(21);
new_SLL.addToFront(3);
new_SLL.addToBack(7897);
console.log(new_SLL.contains(7));



