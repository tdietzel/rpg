export class Mage {
    constructor(){
        this.health = 150;
        this.attack = 50;
        this.strength = 35;
        this.intelligence = 20;
        this.inventory = [{wand:0}, {potion:50}];
    }

    // Hit
    hit(recipient) {
        recipient.health = recipient.health - this.attack;
    }
}