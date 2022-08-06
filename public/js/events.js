class Events {
    static GetPlayerName(whenDone) {
        document.getElementById("submitName").addEventListener('click', (ev) => {
            let name = document.getElementById("playerName").value;
            whenDone(name);
        });
    }

    static CardClick() {
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
}