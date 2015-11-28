var hand_1 = require("./hand");
var Game = (function () {
    function Game(gameName) {
        this.gameName = gameName;
        this.hands = [new hand_1.default(), new hand_1.default()];
        this.maxPointsAllowed = 21;
    }
    Game.initBlackjack = function () {
        return new Game("Blackjack");
    };
    return Game;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Game;
//# sourceMappingURL=game.js.map