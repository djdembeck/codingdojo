removeFront() {
        
	if(this.head == null) {
		return null;
	}

	var temp = this.head;

	if(this.head == this.tail) {
		this.head = null;
		this.tail = null;
		return temp.value;
	}

	else {
		this.head = this.head.next;
		temp.next = null;
		return temp.value;
	}
}
removeBack() {
	if (this.head == null) {
		return null;
	}

	else if (this.head == this.tail) {
		var temp = this.tail.value;
		this.head = null;
		this.tail = null;
		return temp;
	}

	else if (this.head.next == this.tail) {
		var temp = this.tail;
		this.tail = this.head;
		this.head.next = null;
		return temp.value;
	}

	else {
		var temp = this.tail;
		var runner = this.head.next;
		while(runner.next != this.tail) {
			runner = runner.next;
		}
		runner.next = null;
		this.tail = runner;
		return temp.value;
	}
}