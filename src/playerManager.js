export class PlayerManager {
    constructor() {
        this.activePlayers = [];
    }

    // adds player
    addPlayer(activePlayer) {
        this.activePlayers.push(activePlayer);
    }
    // removes player
    removePlayer(activePlayer) {
        const index = this.activePlayers.indexOf(activePlayer);
        if (index !== -1) {
            this.activePlayers.splice(index, 1);
            return `${activePlayer.constructor.name}`
        } else {
            return false;
        }
    }
    // checks health
    checkPlayerHealth() {
        let playerAlive = false;

        this.activePlayers.forEach(activePlayer => {
            if (activePlayer.health <= 0) {
                this.removePlayer(activePlayer);
            } else {
                playerAlive = true; 
            }
        });
        return playerAlive;
    }
}
export let playerManager = new PlayerManager();