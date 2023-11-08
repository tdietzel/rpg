export class Warrior {
    constructor(){
        this.health = 200;
        this.attack = 30;
        this.strength = 50;
        this.intelligence = 10;
        this.exp = 0;
        this.inventory = [{sword:0}, {potion:50}];
    }

    // Hit
    hit(recipient) {
        recipient.health = recipient.health - this.attack;
    }

    // Use potion
    usePotion() {
        if (this.hasPotion()) {
            const potionIndex = this.inventory.findIndex(item => "potion" in item);
            const potionValue = this.inventory[potionIndex].potion;
            this.health += potionValue;
            this.inventory.splice(potionIndex, 1);
        } else {
            return false
        }
    }
    hasPotion() {
        if (this.inventory.some(item => "potion" in item)) {
            return true;
        } else {
            return false;
        }
    }
}

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