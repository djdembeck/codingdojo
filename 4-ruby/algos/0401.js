class TrieNode {
	constructor(val) {
		this.val = val;
		this.children = [];
		this.isWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode("");
	}

	add(word) {
		var runner = this.root
		for (let i = 0; i < word.length; i++) {
			var found = false;
			for (let j = 0; j < runner.children.length; j++) {
				if(runner.children[j].val == word[i]) {
					console.log("I found the letter!")
					found = true;
					runner = runner.children[j]
				}
			}
			if(!found) {
				runner.children.push(new TrieNode(word[i]))
				runner = runner.children[runner.children.length - 1]
			}
		}
		runner.isWOrd = true;
	}
}

var myTrie = new Trie();
myTrie.add("CAT");
myTrie.add("CAR");