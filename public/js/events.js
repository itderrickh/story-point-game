class Events {
    static GetPlayerName(whenDone) {
        document.getElementById("submitName").addEventListener('click', (ev) => {
            let name = document.getElementById("playerName").value;
            whenDone(name);
        });
    }
}