class Node {
	constructor(val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}

// DList Class
// Given the above reference implementations for doubly linked node and doubly linked list, can you construct the rest of a basic DList class? This would include DList methods push(), pop(), front(), back(), contains(), and size().

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}

	push(val) {
		const newTail = new Node(val)
		if (this.head === null) {
			this.head = newTail
		} else if (this.tail != null) {
			newTail.prev = this.tail
			this.tail = newTail
		} else {
			newTail.prev = this.tail
			this.tail = newTail
		}
		return this;
	}
	// push - push a new node to the end of the list
	// pop - pops the tail off and returns the value
	// front - return the value at the head, but does not remove it
	// back - return the value at the tail, but does not remove it
	// contains - returns true if a given value is in the list, false if it is not
	//   myDLL.contains(val)
	// size - returns the number of nodes in the list

}

myDLL = new DoublyLinkedList();
myDLL.push(3)
console.log(myDLL.push(4))
console.log(myDLL.push(5))