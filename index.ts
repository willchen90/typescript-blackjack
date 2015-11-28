/// <reference path="typings/tsd.d.ts" />

import Game from "./game";
import Deck from "./deck";
import Player from "./player";
import Hand from "./hand";
import {generateCardService} from "./card";

let game = Game.initBlackjack();
export {game as default};

let deck = new Deck(generateCardService())
deck.initialDeal()
displayTurn()
humanTurn()
displayTurn()
if (!game.isOver) computerTurn()
if (!game.isOver) displayTurn()
if (!game.isOver) endGame()

export function displayTurn () {
	console.log("************** Blackjack *********************")
	console.log("Human Player Hand Total Value:", game.hands[Player.Human].getSum())
	console.log("Human Player Cards:", game.hands[Player.Human].getCardsDisplayName())
	console.log("");
	console.log("Computer Player Hand Total Value:", game.hands[Player.Computer].getSum())
	console.log("Computer Player Cards:", game.hands[Player.Computer].getCardsDisplayName())
	console.log("*********** End of turn ***********************\n")
}

function humanTurn () {
	if (isPlayerBusted(Player.Human)) {
		return endGame(Player.Computer);
	}
	if (game.hands[Player.Human].getSum() < 17) {
		deck.hit(Player.Human);
		humanTurn();	
	}
}

function computerTurn () {
	if (isPlayerBusted(Player.Computer)) {
		return endGame(Player.Human);
	}
	if (game.hands[Player.Computer].getSum() < 17) {
		deck.hit(Player.Computer);
		computerTurn();	
	}
}

function isPlayerBusted(player: Player): Boolean {
	if (game.hands[player].getSum() > game.maxPointsAllowed) {
		return true
	}
	return false
}

function endGame(winner?: Player) {
	game.isOver = true;
	let nameOfWinner;
	if (winner) {
		nameOfWinner = Player[winner]
	} else {
		nameOfWinner = calculateWinner();	
	}
	console.log("GAME IS OVER");
	console.log("Winner is:", nameOfWinner)	
}

function calculateWinner(): String {
	let computerPoints = game.hands[Player.Computer].getSum();
	let humanPoints = game.hands[Player.Human].getSum	();
	if (humanPoints > computerPoints) {
		return Player[Player.Human];
	}
	if (computerPoints > humanPoints) {
		return Player[Player.Computer];
	}
	return "Tied";
}