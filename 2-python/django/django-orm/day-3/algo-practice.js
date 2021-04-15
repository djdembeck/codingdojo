class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	  // this.prev = null; - for doubly-linked lists
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

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

	// find the node with the smallest value in the list
	// then make it the head of the list by rearranging the nodes
	moveMinToFront() {
		var runner = this.head;
		var min = this.head.value;
		var track_prev = this.head.value;
		var min_node = this.head;
		var previous = this.head;
	
		while (runner != null) {
			if (runner.value < min) {
				min = runner.value;
				min_node = runner;
				previous = track_prev;
			} 
			else {
				track_prev = runner;
			}
			runner = runner.next;
		}
		// Check if head is the same as lowest value (only 1 value)
		if (this.head == min_node) {
			return null;
		}

		previous.next = previous.next.next;
		min_node.next = this.head;
		this.head = min_node;
	}

	// find the node with the largest value and make it the tail
	moveMaxToBack() {
		var runner = this.head;
		var max = this.head.value;
		var max_node = this.head;
		var previous = this.head;
		var track_prev = this.head.value;
	
		while (runner != null) {
			if (runner.value > max) {
				max = runner.value;
				max_node = runner;
				previous = track_prev;
			}
			else {
				track_prev = runner;
			}
			runner = runner.next;
		}
		
		previous.next = max_node.next;
		max_node.next = null;
		this.tail.next = max_node;
		}

	// prependValue(value, target)
    // create a new ListNode with the given value and insert it into the
    // linked list before the node with the target value
    // if no node with that value exists, place it at the end
    // edge cases: is the list empty/only one node/if target is at head of list

    prependValue(value, target) {
		if (this.head == null && this.tail == null) {
			this.addToFront(value);
		}
		
		else if (this.head == this.tail) {
			if (this.head.value == target) {
				this.addToFront(value);
			}
			else {
				this.addToFront(value);
			}
			return null;
		}
		else {
			var runner = this.head;
			
			while(runner.next != null) {
				if (runner.next.value == target) {
					var new_node = new ListNode(value);
					new_node.next = runner.next;
					runner.next = new_node;
					return null
				}
				runner = runner.next
			}

			this.addToBack(value);
		}
    }
}

    // appendValue(value, target)
    // as above, but insert the new node after the node with the target value
    // new node still goes at the end if no node with the target value is found

//     appendValue(value, target) {

// }

var new_SLL = new SinglyLinkedList();
new_SLL.addToFront(3);
new_SLL.addToFront(7);
// new_SLL.addToFront(4);
// new_SLL.addToFront(2);
// new_SLL.addToFront(11);
// console.log(new_SLL.display());
new_SLL.prependValue(9, 4);
console.log(new_SLL.display());