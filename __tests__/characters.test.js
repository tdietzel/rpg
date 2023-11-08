import {Warrior} from "../src/characters.js"
describe("Warrior", () => {
    let warrior;
    beforeEach(() => {
      warrior = new Warrior();
    })

    // constructor
    test("should create a warrior object with health, attack, strength, exp, & intelligence", () => {
        expect(warrior.health).toEqual(200);
        expect(warrior.attack).toEqual(30);
        expect(warrior.strength).toEqual(50);
        expect(warrior.intelligence).toEqual(10);
        expect(warrior.exp).toEqual(0);
    });
    // handles starting inventory
    test("should create a starting inventory with a sword & potion", () => {
        expect(warrior.inventory[0]).toEqual({sword:0})
        expect(warrior.inventory[1]).toEqual({potion:50})
    });

    // hit
    test("should create a warrior hit function that effects recipients health based on attack", () => {
        const mage = new Mage();
        warrior.hit(mage);
        expect(mage.health).toEqual(120);
    });

    test("should return true if the player being attacked is killed", () => {
        const mage = new Mage();
        warrior.attack = 160;
        warrior.hit(mage);
        expect(warrior.hasKilled(mage)).toEqual(true);
    });

    test("should return false if the player being attacked isn't killed", () => {
        const mage = new Mage();
        warrior.hit(mage);
        expect(warrior.hasKilled(mage)).toEqual(false);
    });

    // hasPotion
    test("should create a function that checks wether the inventory includes a potion or not", () => {
        expect(warrior.hasPotion()).toEqual(true);
    });
    test("should return false if the inventory doesn't include a potion", () => {
        warrior.inventory = [{ sword: 0 }];
        expect(warrior.hasPotion()).toEqual(false);
    });

    // usePotion
    test("should create a function that uses a potion if the inventory includes one", () => {
        warrior.usePotion();
        expect(warrior.health).toEqual(250);
    });
    test("should return the health if the inventory doesn't include a potion", () => {
        warrior.inventory = [{ sword: 0 }];
        expect(warrior.usePotion()).toEqual(false);
    });
});

import {Mage} from "../src/characters.js"
describe("Mage", () => {
    // constructor
    test("should create a sage object with health, attack, strength & intelligence", () => {
        const mage = new Mage();
        expect(mage.health).toEqual(150);
        expect(mage.attack).toEqual(50);
        expect(mage.strength).toEqual(35);
        expect(mage.intelligence).toEqual(20);
    });
    // handles starting inventory
    test("should create a starting inventory with a wand & potion", () => {
        const mage = new Mage();
        expect(mage.inventory[0]).toEqual({wand:0})
        expect(mage.inventory[1]).toEqual({potion:50})
    });
    // hit
    test("should create a mage hit function that effects recipients health based on attack", () => {
        const warrior = new Warrior();
        const mage = new Mage();
        mage.hit(warrior);
        expect(warrior.health).toEqual(150);
    });
});