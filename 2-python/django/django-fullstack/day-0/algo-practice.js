// a stack! last in, first out
// we add/remove from the top of a stack

class ArrayStack {
    constructor() {
        this.contents = [];
    }
    // push(value) - adds the given value to the stack
    push(value) {
		this.contents.push(value);
    }

    // pop() - removes the top value from stack and returns it
    pop() {
		return this.contents.pop();
    }

    // top() - returns the top value without removing it
    top() {
		return this.contents[this.contents.length - 1];
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
		for (let i = 0; i < this.contents.length; i++) {
			if (this.contents[i] == target) {
				return true;
			}
		}
		return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
		return (this.contents.length == 0)
    }

    // size() - returns the size of the stack
    size() {
		return this.contents.length;
    }
}

var x = new ArrayStack();
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