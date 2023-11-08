import {Warrior} from "../src/characters.js"
describe("Warrior", () => {
    test("should create a warrior object with health, attack, strength & intelligence", () => {
        const warrior = new Warrior();
        expect(warrior.health).toEqual(200);
        expect(warrior.attack).toEqual(30);
        expect(warrior.strength).toEqual(50);
        expect(warrior.intelligence).toEqual(10);
    });

    test("should create a warrior hit function that effects recipients health based on attack", () => {
        const warrior = new Warrior();
        const mage = new Mage();
        warrior.hit(mage);
        expect(mage.health).toEqual(120);
    });
});

import {Mage} from "../src/characters.js"
describe("Sage", () => {
    test("should create a sage object with health, attack, strength & intelligence", () => {
        const mage = new Mage();
        expect(mage.health).toEqual(150);
        expect(mage.attack).toEqual(50);
        expect(mage.strength).toEqual(35);
        expect(mage.intelligence).toEqual(20);
    });
});