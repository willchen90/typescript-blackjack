var _ = require("lodash");
var Hand = (function () {
    function Hand(cards) {
        this.cards = cards || [];
    }
    Hand.prototype.addCard = function (card) {
        this.addCards([card]);
    };
    Hand.prototype.addCards = function (cards) {
        this.cards = _(this.cards).concat(cards).value();
    };
    Hand.prototype.getSum = function () {
        return _.reduce(this.cards, function (result, card) {
            return result += card.value;
        }, 0);
    };
    Hand.prototype.getCardsDisplayName = function () {
        return _.map(this.cards, function (card) {
            return card.displayName;
        });
    };
    return Hand;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hand;
//# sourceMappingURL=hand.js.map