import {Wizard} from "../src/PlayerTypes/wizard"
import {Warrior} from "../src/PlayerTypes/warrior"

describe("Warrior", () => {
    let warrior;
    beforeEach(() => {
      warrior = new Warrior();
    })

    // constructor
    test("should create a warrior object with health, attack, strength, exp, level, currency, intelligence & position/velocity", () => {
        expect(warrior.health).toEqual(200);
        expect(warrior.attack).toEqual(30);
        expect(warrior.strength).toEqual(50);
        expect(warrior.exp).toEqual(0);
        expect(warrior.level).toEqual(1);
        expect(warrior.currency).toEqual(1000);
        expect(warrior.intelligence).toEqual(10);
        expect(warrior.position).toEqual({"x": 0, "y": 0});
        expect(warrior.velocity).toEqual({"x": 0, "y": 0});
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
        const wizard = new Wizard();
        warrior.hit(wizard);
        expect(wizard.health).toEqual(120);
    });
    test("should return true if the player being attacked is killed", () => {
        const wizard = new Wizard();
        warrior.attack = 160;
        // expect hasKilled = true
        expect(warrior.hit(wizard)).toEqual(true);
        expect(warrior.exp).toEqual(100);
    });
    test("should return false if the player being attacked isn't killed", () => {
        const wizard = new Wizard();
        warrior.hit(wizard);
        expect(warrior.hasKilled(wizard)).toEqual(false);
        expect(warrior.exp).toEqual(0);
    });

    // display LEVELS
    //level 1
    test("should return level 1 if exp is < 1000", () => {
        const wizard = new Wizard();
        warrior.attack = 160;
        warrior.hit(wizard);
        expect(warrior.level).toEqual(1);
        expect(warrior.exp).toEqual(100)
    });
    //level 2
    test("should return level 2 if exp is > 1000 && < 2000", () => {
        const wizard = new Wizard();
        warrior.attack = 160;
        warrior.exp = 950;
        warrior.hit(wizard);
        expect(warrior.level).toEqual(2);
        expect(warrior.exp).toEqual(1050)
    });
    //level 3
    test("should return level 3 if exp is > 2000 && < 3000", () => {
        const wizard = new Wizard();
        warrior.attack = 160;
        warrior.exp = 1950;
        warrior.hit(wizard);
        expect(warrior.level).toEqual(3);
        expect(warrior.exp).toEqual(2050)
    });
    //level 4
    test("should return level 4 if exp is > 3000 && < 4000", () => {
        const wizard = new Wizard();
        warrior.attack = 160;
        warrior.exp = 2950;
        warrior.hit(wizard);
        expect(warrior.level).toEqual(4);
        expect(warrior.exp).toEqual(3050)
    });
    //level 5
    test("should return level 5 if exp is > 4000 && < 5000", () => {
        const wizard = new Wizard();
        warrior.attack = 160;
        warrior.exp = 3950;
        warrior.hit(wizard);
        expect(warrior.level).toEqual(5);
        expect(warrior.exp).toEqual(4050)
    });
});