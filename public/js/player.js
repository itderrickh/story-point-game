class Player {
    static canLoad() {
        return localStorage.getItem("SPG_PlayerName") !== null;
    }

    static load() {
        var player = new Player();
        player.name = localStorage.getItem("SPG_PlayerName");
        return player;
    }

    static setName(name) {
        localStorage.setItem("SPG_PlayerName", name); 
    }
}