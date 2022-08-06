class State {
    constructor() {
        this.players = {};
        this.round = 1;
        this.selectedCards = {};
        this.cardsFlipped = false;
        this.storyLink = '';
        this.storyName = '';

        this.playerId = '';
    }

    playCard(player, card) {
        this.selectedCards[player.id] = card;
    }

    unPlayCard(player) {
        delete this.selectedCards[player.id];
    }

    changeRound(round) {
        this.round = round;
    }

    print() {
        console.table(this);
    }
}