import {Warrior} from "../src/PlayerTypes/warrior"
import {Wizard} from "../src/PlayerTypes/wizard"

describe("Leveling System", () => {
    // level up buffs
    test("should apply level 2 buffs", () => {
        let warrior = new Warrior();
        let wizard = new Wizard();
        wizard.attack = 250;
        wizard.exp = 950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(2);
        expect(wizard.health).toEqual(200);
        expect(wizard.intelligence).toEqual(30);
    });
    test("should apply level 3 buffs", () => {
        let warrior = new Warrior();
        let wizard = new Wizard();
        wizard.attack = 250;
        wizard.exp = 1950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(3);
        expect(wizard.health).toEqual(200);
        expect(wizard.attack).toEqual(300);
        expect(wizard.intelligence).toEqual(40);
    });
    test("should apply level 4 buffs", () => {
        let warrior = new Warrior();
        let wizard = new Wizard();
        wizard.attack = 250;
        wizard.exp = 2950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(4);
        expect(wizard.health).toEqual(350);
        expect(wizard.attack).toEqual(300);
        expect(wizard.strength).toEqual(40);
        expect(wizard.intelligence).toEqual(45);
    });
    test("should apply level 5 buffs", () => {
        let warrior = new Warrior();
        let wizard = new Wizard();
        wizard.attack = 250;
        wizard.exp = 3950;
        wizard.hit(warrior);
        expect(wizard.level).toEqual(5);
        expect(wizard.health).toEqual(400);
        expect(wizard.intelligence).toEqual(45);
    });
});