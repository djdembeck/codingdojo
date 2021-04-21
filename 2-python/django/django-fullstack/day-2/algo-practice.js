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
        
    }

    // dequeue() - removes the front (tail) value from queue and returns it
    dequeue() {
        
    }

    // front() - returns the front (tail) value without removing it
    front() {

    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
    contains(target) {

    }

    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {

    }

    // size() - returns the size of the queue
    size() {

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