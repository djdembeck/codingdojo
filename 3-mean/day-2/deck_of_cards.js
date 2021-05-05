class Card {
	constructor () {
		var suit_arr =	['Hearts', 'Clubs','Diamonds', 'Spades']
		this.cards = []
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
			]
			for (let j = 0; j < card_dict.length; j++) {
				let new_entry = card_dict[j]
				new_entry['suit'] = `${suit_arr[i]}`
				this.cards.push(new_entry)
			}
		}
	}
}

var test = new Card()
console.log(test.cards)

class Deck {

}

class Player {

}