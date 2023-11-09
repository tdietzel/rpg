import {Warrior} from "../src/warrior.js"
import {Wizard} from "../src/wizard.js"
describe("Wizard", () => {
    let wizard;
    beforeEach(() => {
      wizard = new Wizard();
    })

    // constructor
    test("should create a Wizard object with health, attack, strength & intelligence", () => {
        expect(wizard.health).toEqual(150);
        expect(wizard.attack).toEqual(50);
        expect(wizard.strength).toEqual(35);
        expect(wizard.intelligence).toEqual(20);
    });
    // handles starting inventory
    test("should create a starting inventory with a wand & potion", () => {
        expect(wizard.inventory[0]).toEqual({wand:0})
        expect(wizard.inventory[1]).toEqual({potion:50})
    });

    // usePotion
    test("should create a function that uses a potion if the inventory includes one", () => {
        wizard.usePotion();
        expect(wizard.health).toEqual(200);
    });
    test("should return the health if the inventory doesn't include a potion", () => {
        wizard.inventory = [{ sword: 0 }];
        expect(wizard.usePotion()).toEqual(false);
    });
    
    // hit
    test("should create a mage hit function that effects recipients health based on attack", () => {
        const warrior = new Warrior();
        const wizard = new Wizard();
        wizard.hit(warrior);
        expect(warrior.health).toEqual(150);
    });
});