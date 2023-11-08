export class Warrior {
    constructor(){
        this.health = 200;
        this.attack = 30;
        this.strength = 50;
        this.intelligence = 10;
        this.inventory = [{sword: 0}, {potion: 50}]
    }

    hit(recipient) {
        recipient.health = recipient.health - this.attack;
    }
}

export class Mage {
    constructor(){
        this.health = 150;
        this.attack = 50;
        this.strength = 35;
        this.intelligence = 20;
    }

    hit(recipient) {
        recipient.health = recipient.health - this.attack;
    }
}