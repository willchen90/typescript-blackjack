/// <reference path="typings/tsd.d.ts" />
var game_1 = require("./game");
var deck_1 = require("./deck");
var player_1 = require("./player");
var card_1 = require("./card");
var game = game_1.default.initBlackjack();
exports.default = game;
var deck = new deck_1.default(card_1.generateCardService());
deck.initialDeal();
displayTurn();
humanTurn();
displayTurn();
if (!game.isOver)
    computerTurn();
if (!game.isOver)
    displayTurn();
if (!game.isOver)
    endGame();
function displayTurn() {
    console.log("************** Blackjack *********************");
    console.log("Human Player Hand Total Value:", game.hands[player_1.default.Human].getSum());
    console.log("Human Player Cards:", game.hands[player_1.default.Human].getCardsDisplayName());
    console.log("");
    console.log("Computer Player Hand Total Value:", game.hands[player_1.default.Computer].getSum());
    console.log("Computer Player Cards:", game.hands[player_1.default.Computer].getCardsDisplayName());
    console.log("*********** End of turn ***********************\n");
}
exports.displayTurn = displayTurn;
function humanTurn() {
    if (isPlayerBusted(player_1.default.Human)) {
        return endGame(player_1.default.Computer);
    }
    if (game.hands[player_1.default.Human].getSum() < 17) {
        deck.hit(player_1.default.Human);
        humanTurn();
    }
}
function computerTurn() {
    if (isPlayerBusted(player_1.default.Computer)) {
        return endGame(player_1.default.Human);
    }
    if (game.hands[player_1.default.Computer].getSum() < 17) {
        deck.hit(player_1.default.Computer);
        computerTurn();
    }
}
function isPlayerBusted(player) {
    if (game.hands[player].getSum() > game.maxPointsAllowed) {
        return true;
    }
    return false;
}
function endGame(winner) {
    game.isOver = true;
    var nameOfWinner;
    if (winner) {
        nameOfWinner = player_1.default[winner];
    }
    else {
        nameOfWinner = calculateWinner();
    }
    console.log("GAME IS OVER");
    console.log("Winner is:", nameOfWinner);
}
function calculateWinner() {
    var computerPoints = game.hands[player_1.default.Computer].getSum();
    var humanPoints = game.hands[player_1.default.Human].getSum();
    if (humanPoints > computerPoints) {
        return player_1.default[player_1.default.Human];
    }
    if (computerPoints > humanPoints) {
        return player_1.default[player_1.default.Computer];
    }
    return "Tied";
}
//# sourceMappingURL=index.js.map