class Card {
	constructor () {
		var suit_arr =	['Hearts', 'Clubs','Diamonds', 'Spades'];
		this.cards = [];
		for (var i = 0; i < suit_arr.length; i++) {
			var card_dict = [
				{'name': 'Ace', 'value': '1'},
				{'name': 'Two', 'value': '2'},
				{'name': 'Three', 'value': '3'},
				{'name': 'Four', 'value': '4'},
				{'name': 'Five', 'value': '5'},
				{'name': 'Six', 'value': '6'},
				{'name': 'Seven', 'value': '7'},
				{'name': 'Eight', 'value': '8'},
				{'name': 'Nine', 'value': '9'},
				{'name': 'Ten', 'value': '10'},
				{'name': 'Jack', 'value': '11'},
				{'name': 'Queen', 'value': '12'},
				{'name': 'King', 'value': '13'}
			];
			for (let j = 0; j < card_dict.length; j++) {
				let new_entry = card_dict[j];
				new_entry['suit'] = `${suit_arr[i]}`;
				this.cards.push(new_entry);
			}
		}
	}

	show() {
		var rand = Math.floor(Math.random() * this.cards.length);
		var selected = this.cards[rand];
		return selected;
	}
}

class Deck {
	all_cards = new Card()
	constructor () {
		this.deck = this.all_cards.cards;
	}

	dealCard() {
		var rand = Math.floor(Math.random() * this.deck.length);
		var deal = this.deck[rand];
		this.deck.splice(rand, 1);
		return deal;
	}

	reset() {
		delete this.deck;
		var new_deck = new Deck()
		return new_deck.deck;
	}

	// Fisher-yates
	shuffle() {
		var count = this.deck.length;

		while (count) {
			var make_random = Math.floor(Math.random() * count--);
			var current = this.deck[count];
			this.deck[count] = this.deck[make_random];
			this.deck[make_random] = current;
		}
		return this.deck;
	}
}

class Player {
	all_cards = new Deck()
	constructor(name) {
		this.name = name;
		var count = 5;
		var partial_hand = [];
		while (count > 0) {
			partial_hand.push(this.all_cards.dealCard());
			count--;
		}
		this.hand = partial_hand;
	}

	discard() {
		var rand = Math.floor(Math.random() * this.hand.length);
		this.hand.splice(rand, 1);
		return this.hand;
	}

	take() {
		this.hand.push(this.all_cards.dealCard());
		return this.hand;
	}
}

// var card = new Card()
// console.log(card.show())
// var test2 = new Player('Tigress')
// console.log(test2.take())
// console.log(test2.discard())