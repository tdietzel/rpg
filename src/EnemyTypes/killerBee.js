class KillerBee {
    constructor(){
        this.health = 50;
        this.attack = 10;
        this.level = 1;
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0
        }
    }
}
export let killerBee = new KillerBee();