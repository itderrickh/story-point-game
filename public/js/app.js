class Application {
    constructor(state) {
        this.state = state;
        this.game = new Game(this);
        this.socket = null;
    }

    setNameSelect() {
        document.getElementById("scene1").style.display = "block";
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene3").style.display = "none";
        this.state.changeRound(1);
    }

    setConnecting(player, whenDone) {
        let self = this;
        self.socket = io('/users', { path: baseUrl + 'socket.io' });

        self.socket.on('stateUpdated', (data, b) => {
            // Set global states
            self.state.players = data.players;
            self.state.selectedCards = data.selectedCards;
            self.state.cardsFlipped = data.cardsFlipped;
            self.state.playerId = self.socket.id;
            self.state.storyName = data.storyName;
            self.state.storyLink = data.storyLink;

            self.state.print();
            self.game.updateGui();
        });
        self.socket.emit('updateUsername', player.name);
        document.getElementById("scene1").style.display = "none";
        document.getElementById("scene2").style.display = "block";
        document.getElementById("scene3").style.display = "none";
        self.state.changeRound(2);
        setTimeout(() => {
            whenDone();
        }, 1000)
    }

    setGameStart() {
        this.game.updateUserBoard();
        this.game.updateGui();
        document.getElementById("scene1").style.display = "none";
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene3").style.display = "block";
        this.state.changeRound(3);
    }

    flip() {
        this.socket.emit('flip');
    }

    selectCard(card) {
        this.socket.emit('cardSelected', card);
    }
}