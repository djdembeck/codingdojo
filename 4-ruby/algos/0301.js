class BSTree {
	constructor() {
		this.root = null;
	}

	add(val) {
		//create a new node and add it as a leaf to the tree
		let newNode = new BSNode(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		//iterate through tree
		//start with a loop
		//set a runner
		let runner = this.root;
		while (true) {
			//move runner left or right
			if (runner.val > val) {
				//move left or be done
				if (runner.left) {
					runner = runner.left;
				} else {
					runner.left = newNode;
					break;
				}
			} else {
				//move right or be done
				if (runner.right) {
					runner = runner.right;
				} else {
					runner.right = newNode;
					break;
				}
			}
		}
		return this;
	}

	min() {
		//find the smallest node and return its val
	}

	contains(target) {
		//return if target val exists in tree
	}
}

class BSNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
