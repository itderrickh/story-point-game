const state = new State();
const app = new Application(state);

app.setNameSelect();

if (Player.canLoad()) {
    var player = Player.load();

    app.setConnecting(player, () => {
        app.setGameStart();
    });
} else {
    Events.GetPlayerName((name) => {
        Player.setName(name);
        var player = Player.load();
        app.setConnecting(player, () => {
            app.setGameStart();
        });
    });
}