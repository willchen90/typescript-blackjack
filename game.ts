import Hand from "./hand";

export default class Game {
	gameName: string;
	isOver: boolean;
	winner: string;
	hands: Hand[];
	maxPointsAllowed: number;
	
	constructor(gameName: string) {
		this.gameName = gameName;
		this.hands = [new Hand(), new Hand()];
		this.maxPointsAllowed = 21;
	}
	static initBlackjack () {
		return new Game("Blackjack"); 
	}
	
}
