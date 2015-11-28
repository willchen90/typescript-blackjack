import Card from "./card";
import Player from "./player";
import game from "./index";
import * as _ from "lodash";
import Utils from "./utils";

export default class Deck {
	private cards: Card[];
	constructor (cards: Card[]) {
		this.cards = _.shuffle(cards);
	}
	initialDeal () {
		this.dealCard(Player.Human, 2);
		this.dealCard(Player.Computer, 2);
	}
	hit (player: Player) {
		this.dealCard(player, 1);
	}
	private dealCard (player: Player, numberOfCards: number) {
		let cards: Card[] = Utils.multipop(this.cards, numberOfCards);
		game.hands[player].addCards(cards);
	}
}

