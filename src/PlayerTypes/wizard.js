import {playerManager} from "../playerManager";
import {levelSystem} from "../levelingSystem";

export class Wizard {
  constructor(){
    this.health = 150;
    this.attack = 50;
    this.strength = 35;
    this.intelligence = 20;
    this.exp = 0;
    this.level = 1;
    this.currency = 1000;
    this.inventory = [{wand:0}, {potion:50}];
    this.position = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: 0,
      y: 0
    };
  }
  // Hit
  hit(recipient) {
    recipient.health = recipient.health - this.attack;
    return this.hasKilled(recipient);
  }
  // +100exp per kill
  hasKilled(recipient) {
    if (recipient.health <= 0) {
      playerManager.checkPlayerHealth();
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
      return false;
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
    this.level = levelSystem.checkLevel(this.exp);
    this.updateStats();
  }

  updateStats() {
    const levelStats = levelSystem.getLevelStats(this.level);
    this.health += levelStats.health;
    this.attack += levelStats.attack;
    this.strength += levelStats.strength;
    this.intelligence += levelStats.intelligence;
  }
}