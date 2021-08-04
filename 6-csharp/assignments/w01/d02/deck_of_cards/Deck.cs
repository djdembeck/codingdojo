using System;
using System.Collections.Generic;


namespace deck_of_cards
{
    interface IRandomizable
    {
        void Randomize();
    }
    public class Card
    {
        public string StringVal;
        public string Suit;
        public int Val;

        public Card(string stringVal, string suit, int val)
        {
            StringVal = stringVal;
            Suit = suit;
            Val = val;
        }
    }
    public class Deck : IRandomizable
    {
        private List<Card> cards;

        public Deck()
        {
            cards = new List<Card>();
            populateDeck();
        }

        private void populateDeck()
        {
            Console.WriteLine("Populating the deck...");

            string[] suits = {"Spade", "Heart", "Diamond", "Club"};
            foreach (string suit in suits)
            {
                for (int val = 1; val <= 13; val++)
                {
                    string stringVal;
                    switch(val)
                    {
                        case 1:
                            stringVal = "Ace";
                            break;
                        case 11:
                            stringVal = "Jack";
                            break;
                        case 12:
                            stringVal = "Queen";
                            break;
                        case 13:
                            stringVal = "King";
                            break;
                        default:
                            stringVal = val.ToString();
                            break;
                    }
                    cards.Add(new Card(stringVal, suit, val));
                }
            }
        }

        public Card Deal()
        {
            // get teh card
            Card topCard = cards[0];
            // remove teh card
            cards.RemoveAt(0);

            return topCard;
        }

        public void PrintDeck()
        {
            foreach(Card card in cards)
            {
                Console.WriteLine($"{card.StringVal} of {card.Suit}s");
            }
        }

        public void Randomize()
        {
            Random rand = new Random();
            for (int idx = 0; idx < cards.Count; idx++)
            {
                int randidx = rand.Next(cards.Count);

                Card temp = cards[idx];
                cards[idx] = cards[randidx];
                cards[randidx] = temp;
            }
        }

        public void Reset()
        {
            Console.WriteLine("Resetting the deck...");
            populateDeck();
            Randomize();
        }
    }

    public class Player
    {
        private List<Card> hand;

        public string Name;

        public Player(string name)
        {
            Name = name;
            hand = new List<Card>();
        }

        public Card Draw(Deck d)
        {
            Card card = d.Deal();
            hand.Add(card);

            return card;
        }

        public Card Discard(int idx)
        {
            if (hand.Count < idx)
            {
                Card card = hand[idx];
                hand.RemoveAt(idx);
                return card;
            }
            return null;
        }
    }
}