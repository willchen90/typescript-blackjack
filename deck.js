var player_1 = require("./player");
var index_1 = require("./index");
var _ = require("lodash");
var utils_1 = require("./utils");
var Deck = (function () {
    function Deck(cards) {
        this.cards = _.shuffle(cards);
    }
    Deck.prototype.initialDeal = function () {
        this.dealCard(player_1.default.Human, 2);
        this.dealCard(player_1.default.Computer, 2);
    };
    Deck.prototype.hit = function (player) {
        this.dealCard(player, 1);
    };
    Deck.prototype.dealCard = function (player, numberOfCards) {
        var cards = utils_1.default.multipop(this.cards, numberOfCards);
        index_1.default.hands[player].addCards(cards);
    };
    return Deck;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Deck;
//# sourceMappingURL=deck.js.map