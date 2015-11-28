var _ = require("lodash");
var suit_1 = require("./suit");
var CardType = (function () {
    function CardType(value, name) {
        this.value = value;
        this.name = name;
    }
    return CardType;
})();
exports.CardType = CardType;
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
var Card = (function () {
    function Card(suit, name, value) {
        this.value = value;
        this.suit = suit;
        this.name = name;
        this.computeDisplayName();
    }
    Card.prototype.computeDisplayName = function () {
        this.displayName = this.name + " of " + this.suit;
    };
    return Card;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
function generateCardService() {
    var cards = [];
    for (var i = 0; i < 4; i++) {
        _.each(cardTypes, function (cardType) {
            cards.push(new Card(suit_1.default[i], cardType.name, cardType.value));
        });
    }
    return cards;
}
exports.generateCardService = generateCardService;
//# sourceMappingURL=card.js.map