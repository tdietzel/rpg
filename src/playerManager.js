export class PlayerManager {
    constructor() {
        this.activePlayers = [];
    }

    addPlayer(activePlayer) {
        this.activePlayers.push(activePlayer);
    }

    removePlayer(activePlayer) {
        const index = this.activePlayers.indexOf(activePlayer);
        if (index !== -1) {
            this.activePlayers.splice(index, 1);
            return `${activePlayer.constructor.name}`
        } else {
            return false;
        }
    }
}