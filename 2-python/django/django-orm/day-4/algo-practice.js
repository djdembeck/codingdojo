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

	// secondToLastValue()
	// return the value of the second-to-last-node in the linked list
	// if the list has one or zero nodes in it, return undefined

	secondToLastValue() {
		var runner = this.head;

		if (this.head == null || this.tail == null) {
			return undefined;
		}
		// 2nd to last's next will be tail
		while (runner.next.next != null) {
			runner = runner.next;
		}
		return runner.value;
	}

	// partition(target)
	// rearrange the nodes in the list so that all nodes with values less than
	// the target value come first in the list, then all nodes with the target
	// value, then all nodes with values greater than the target value
	// if there are no nodes with values greater or less than the target value,
	// or no nodes with the target value at all, the function should still work
	// if the target is 5, and the list is 8 - 7 - 1 - 5 - 4 - 5 - 2 - 8 - 3
	// the list should rearrange so that the nodes (represented by values)
	// are in this order:
	// 1 - 4 - 2 - 3 - 5 - 5 - 8 - 7 - 8
	// if the target 5, and the list contains:
	// 8 - 1 - 7 - 2 - 4 - 9 - 0 - 1 - 3 - 8
	// the output should be:
	// 1 - 2 - 4 - 0 - 1 - 3 - 8 - 7 - 9 - 8
	// order of nodes does not matter as long as the above rules
	// for placement are respected
	// remember to fix your head and tail afterwards
	// bonus: can you do it without using an array?
	// other bonus: can you do it without using an array -and- without using
	// another instance(s) of SinglyLinkedList?
	// super super W bonus extra plus turbo 3 and knuckles (featuring Dante
	// from the Devil May Cry series): can u do it blindfolded?!?!??!?!!!?!?!?!

	partition(target) {
		// lower than target | target | higher than target
		var runner = this.head;
		var arr = [];

		if (this.head == null || this.tail == null) {
			return undefined;
		}

		while (runner.next != null) {
			if (runner.value < target) {
				// console.log(runner.value, "is less than", target)
				arr.push(runner.value);
			}
			runner = runner.next;
		}
		var runner = this.head;

		while (runner.next != null) {
			if (runner.value == target) {
				arr.push(runner.value);
			}
			runner = runner.next;
		}
		var runner = this.head;

		while (runner != null) {
			if (runner.value > target) {
				arr.push(runner.value);
			}
			runner = runner.next;
		}

		var new_SLL = new SinglyLinkedList();
		for (let i = 0; i < arr.length; i++) {
			new_SLL.addToBack(arr[i]);
		}
		return new_SLL.display();
	}
}

var new_SLL = new SinglyLinkedList();
new_SLL.addToFront(8);
new_SLL.addToFront(7);
new_SLL.addToFront(1);
// new_SLL.addToFront(5);
new_SLL.addToFront(4);
// new_SLL.addToFront(5);
new_SLL.addToFront(2);
new_SLL.addToFront(8);
new_SLL.addToFront(3);
console.log(new_SLL.display());
// new_SLL.prependValue(9, 4);
console.log(new_SLL.partition(5));