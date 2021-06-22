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

	// I assume we can find levels by just going right every time?
	height() {
		let runner = this.root;
		let count = 0;
		while (true) {
			if (runner == this.root) {
				count ++
			}
			if (runner.right) {
				count++
				runner = runner.right
			} else {
				break;
			}
		}
		return count;
	}

	size() {
		if (!this.root) {
			return 0;
		}

		let runner1 = this.root;
		let count = 0;
		while (true) {
			if (runner1 == this.root) {
				count ++
			}
			if (runner1.right) {
				count++
				runner1 = runner1.right
			}
			if (runner1.left) {
				count++
			}
			if (!runner1.right) {
				break
			}
		}
		return count;
	}
}

class BSNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

tree = new BSTree()
tree.add(1)
tree.add(2)
tree.add(3)
tree.add(2)
tree.add(1)
tree.add(4)
console.log(tree)
console.log(tree.size())
console.log(tree.height())