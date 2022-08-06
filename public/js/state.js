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

    changeRound(round) {
        this.round = round;
    }

    print() {
        console.table(this);
    }
}