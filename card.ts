import * as _ from "lodash";
import Suit from "./suit";

export class CardType {
	public value;
	public name;
	constructor (value: number, name: string) {
		this.value = value;
		this.name = name;		
	}
}

var cardTypes = [
	new CardType(1, "Ace"),
	new CardType(2, "Two"),
	new CardType(3, "Three"),
	new CardType(4, "Four"),
	new CardType(5, "Five"),
	new CardType(6, "Six"),
	new CardType(7, "Seven"),
	new CardType(8, "Eight"),
	new CardType(9, "Nine"),
	new CardType(10, "Ten"),
	new CardType(10, "Jack"),
	new CardType(10, "Queen"),
	new CardType(10, "King")
];

export default class Card {
	public displayName: string;
	public value;
	private suit;
	private name;
	
	constructor (suit: string, name: string, value: number) {
		this.value = value;
		this.suit = suit;
		this.name = name;
		this.computeDisplayName();
	}
	
	private computeDisplayName () {
		this.displayName = this.name + " of " + this.suit;
	}
}

export function generateCardService (): Card[] {
	
	var cards: Card[] = [];
	for (var i = 0; i < 4; i++) {
		_.each(cardTypes, function(cardType){
			cards.push(new Card(Suit[i], cardType.name, cardType.value));
		})
	}
	return cards;
}