class Game {
    constructor(app) {
        this.app = app;
    }

    userCardTemplate(user, card, alwaysShown) {
        return `
        <div class="user">
            <h2>${user}:</h2>

            <div class="flip-card ${alwaysShown ? "player-card": "non-player"}">
                <div class="flip-card-inner">
                    <div class="flip-card-front card card-back"></div>
                    <div class="flip-card-back card card-front">${card}</div>
                </div>
            </div>
        </div>`;
    }

    updateUserBoard() {
        var users = this.app.state.players;
        var me = users[this.app.state.playerId];

        var userSelectedCard = this.app.state.selectedCards.hasOwnProperty(this.app.state.playerId) ? 
            this.app.state.selectedCards[this.app.state.playerId] : 0;
        var userboard =  this.userCardTemplate(me.username, userSelectedCard, true);
        document.getElementById("user-board").innerHTML = userboard;
    }

    updateBoard() {
        var users = this.app.state.players;
        
        var contents = "";
        for (const key in users) {
            if (Object.hasOwnProperty.call(users, key) && key !== this.app.state.playerId) {
                const user = users[key];
                var cardValue = this.app.state.selectedCards.hasOwnProperty(key) ? this.app.state.selectedCards[key] : 0;
                contents += this.userCardTemplate(user.username, cardValue, false);
            }
        }

        document.getElementById("board").innerHTML = contents;
    }

    updateFlippedCards() {
        setTimeout(() => {
            if (this.app.state.selectedCards.hasOwnProperty(this.app.state.playerId)){
                var playerCard = document.getElementsByClassName("player-card")[0];
                playerCard.classList.add("flipped");
            }

            if (this.app.state.cardsFlipped) {
                let cards = document.getElementsByClassName("non-player");
                for (let index = 0; index < cards.length; index++) {
                    const element = cards[index];
                    element.classList.add("flipped");
                }
            } else {
                let cards = document.getElementsByClassName("non-player");
                for (let index = 0; index < cards.length; index++) {
                    const element = cards[index];
                    element.classList.remove("flipped");
                }
            }
        }, 250);
    }

    updateStory() {
        var link = document.getElementById("story");
        link.href = this.app.state.storyLink;
        link.textContent = this.app.state.storyName;
    }

    setUserCardClick() {
        var playerCard = document.getElementsByClassName("player-card")[0];
        var selectionCards = document.getElementsByClassName('selection-card');
        for (var i = 0; i < selectionCards.length; i++) {
            let selectionCard = selectionCards[i];
            selectionCard.addEventListener('click', (event) => {
                var textNode = playerCard.querySelector('.flip-card-back');
                textNode.textContent = event.currentTarget.innerHTML;

                playerCard.classList.add("flipped");
                this.app.selectCard(event.currentTarget.innerHTML);
            });
        }
    }

    updateGui() {
        this.updateBoard();
        this.updateFlippedCards();
        this.setUserCardClick();
        this.updateStory();
    }
}