export class Wizard {
    constructor(){
        this.health = 150;
        this.attack = 50;
        this.strength = 35;
        this.intelligence = 20;
        this.exp = 0;
        this.level = 1;
        this.inventory = [{wand:0}, {potion:50}];
    }
    // Hit
    hit(recipient) {
        recipient.health = recipient.health - this.attack;
        return this.hasKilled(recipient);
    }
    // +100exp per kill
    hasKilled(recipient) {
        if (recipient.health <= 0) {
            this.exp += 100;
            this.checkLevel();
            return true;
        } else {
            return false;
        }
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
    // Check Level
    checkLevel() {
        if (this.exp < 1000) {
            this.level = 1;
        } else if (this.exp >= 1000 && this.exp <= 1999) {
            this.level = 2;
        } else if (this.exp >= 2000 && this.exp <= 2999) {
            this.level = 3;
        } else if (this.exp >= 3000 && this.exp <= 3999) {
            this.level = 4;
        } else {
            this.level = 5;
        }
    }
}