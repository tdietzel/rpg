import {Warrior} from "../src/PlayerTypes/warrior"
import {Wizard} from "../src/PlayerTypes/wizard"

describe("Wizard", () => {
    let wizard;
    beforeEach(() => {
      wizard = new Wizard();
    })

    // constructor
    test("should create a Wizard object with health, attack, strength, exp, level, currency, intelligence & position/velocity", () => {
        expect(wizard.health).toEqual(150);
        expect(wizard.attack).toEqual(50);
        expect(wizard.strength).toEqual(35);
        expect(wizard.exp).toEqual(0);
        expect(wizard.level).toEqual(1);
        expect(wizard.currency).toEqual(1000);
        expect(wizard.intelligence).toEqual(20);
        expect(wizard.position).toEqual({"x": 0, "y": 0});
        expect(wizard.velocity).toEqual({"x": 0, "y": 0});
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
        wizard.inventory = [{ wand: 0 }];
        expect(wizard.usePotion()).toEqual(false);
    });
    // hasPotion
    test("should create a function that checks wether the inventory includes a potion or not", () => {
        expect(wizard.hasPotion()).toEqual(true);
    });
    test("should return false if the inventory doesn't include a potion", () => {
        wizard.inventory = [{ wand: 0 }];
        expect(wizard.hasPotion()).toEqual(false);
    });

    // hit
    test("should create a mage hit function that effects recipients health based on attack", () => {
        const warrior = new Warrior();
        const wizard = new Wizard();
        wizard.hit(warrior);
        expect(warrior.health).toEqual(150);
    });
    test("should return true if the player being attacked is killed", () => {
        const warrior = new Warrior();
        wizard.attack = 210;
        // expect hasKilled = true
        expect(wizard.hit(warrior)).toEqual(true);
        expect(wizard.exp).toEqual(100);
    });
    test("should return false if the player being attacked isn't killed", () => {
        const warrior = new Warrior();
        wizard.hit(warrior);
        expect(wizard.hasKilled(warrior)).toEqual(false);
        expect(wizard.exp).toEqual(0);
    });

//display LEVELS
    //level 1
    test("should return level 1 if exp is < 1000", () => {
        const warrior = new Warrior();
        wizard.attack = 210;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(1);
        expect(wizard.exp).toEqual(100)
    });
    //level 2
    test("should return level 2 if exp is > 1000 && < 2000", () => {
        const warrior = new Warrior();
        wizard.attack = 210;
        wizard.exp = 950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(2);
        expect(wizard.exp).toEqual(1050)
    });
    //level 3
    test("should return level 3 if exp is > 2000 && < 3000", () => {
        const warrior = new Warrior();
        wizard.attack = 210;
        wizard.exp = 1950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(3);
        expect(wizard.exp).toEqual(2050)
    });
    //level 4
    test("should return level 4 if exp is > 3000 && < 4000", () => {
        const warrior = new Warrior();
        wizard.attack = 210;
        wizard.exp = 2950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(4);
        expect(wizard.exp).toEqual(3050)
    });
    //level 5
    test("should return level 5 if exp is > 4000 && < 5000", () => {
        const warrior = new Warrior();
        wizard.attack = 210;
        wizard.exp = 3950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(5);
        expect(wizard.exp).toEqual(4050)
    });
});