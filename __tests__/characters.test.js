import {Warrior} from "../src/warrior.js"
describe("Warrior", () => {
    let warrior;
    beforeEach(() => {
      warrior = new Warrior();
    })

    // constructor
    test("should create a warrior object with health, attack, strength, exp, level & intelligence", () => {
        expect(warrior.health).toEqual(200);
        expect(warrior.attack).toEqual(30);
        expect(warrior.strength).toEqual(50);
        expect(warrior.intelligence).toEqual(10);
        expect(warrior.exp).toEqual(0);
        expect(warrior.level).toEqual(1);
    });
    // handles starting inventory
    test("should create a starting inventory with a sword & potion", () => {
        expect(warrior.inventory[0]).toEqual({sword:0})
        expect(warrior.inventory[1]).toEqual({potion:50})
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
    // hasPotion
    test("should create a function that checks wether the inventory includes a potion or not", () => {
        expect(warrior.hasPotion()).toEqual(true);
    });
    test("should return false if the inventory doesn't include a potion", () => {
        warrior.inventory = [{ sword: 0 }];
        expect(warrior.hasPotion()).toEqual(false);
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
        // expect hasKilled = true
        expect(warrior.hit(mage)).toEqual(true);
        expect(warrior.exp).toEqual(100);
    });
    test("should return false if the player being attacked isn't killed", () => {
        const mage = new Mage();
        warrior.hit(mage);
        expect(warrior.hasKilled(mage)).toEqual(false);
        expect(warrior.exp).toEqual(0);
    });

// display LEVELS
    //level 1
    test("should return level 1 if exp is < 1000", () => {
        const mage = new Mage();
        warrior.attack = 160;
        warrior.hit(mage);
        expect(warrior.level).toEqual(1);
        expect(warrior.exp).toEqual(100)
    });
    //level 2
    test("should return level 2 if exp is > 1000 && < 2000", () => {
        const mage = new Mage();
        warrior.attack = 160;
        warrior.exp = 950;
        warrior.hit(mage);
        expect(warrior.level).toEqual(2);
        expect(warrior.exp).toEqual(1050)
    });
    //level 3
    test("should return level 3 if exp is > 2000 && < 3000", () => {
        const mage = new Mage();
        warrior.attack = 160;
        warrior.exp = 1950;
        warrior.hit(mage);
        expect(warrior.level).toEqual(3);
        expect(warrior.exp).toEqual(2050)
    });
    //level 4
    test("should return level 4 if exp is > 3000 && < 4000", () => {
        const mage = new Mage();
        warrior.attack = 160;
        warrior.exp = 2950;
        warrior.hit(mage);
        expect(warrior.level).toEqual(4);
        expect(warrior.exp).toEqual(3050)
    });
    //level 5
    test("should return level 5 if exp is > 4000 && < 5000", () => {
        const mage = new Mage();
        warrior.attack = 160;
        warrior.exp = 3950;
        warrior.hit(mage);
        expect(warrior.level).toEqual(5);
        expect(warrior.exp).toEqual(4050)
    });
});

import {Mage} from "../src/mage.js"
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