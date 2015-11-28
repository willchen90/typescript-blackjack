import Card from "./card";
import Player from "./player";
import * as _ from "lodash";

export default class Hand {
	private cards;
	constructor (cards?: Card[]) {
		this.cards = cards || [];
	}
	addCard (card: Card) {
		this.addCards([card]);
	}
	addCards (cards: Card[]) {
		this.cards = _(this.cards).concat(cards).value();
	}
	getSum () {
		return _.reduce(this.cards, function(result, card: Card) {
			return result += card.value;
		}, 0);
	}
	getCardsDisplayName () {
		return _.map(this.cards, function(card: Card) {
			return card.displayName;
		});
	} 
}