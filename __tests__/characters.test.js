import {Warrior} from "../src/characters.js"
describe("Warrior", () => {
    test("should create a warrior object with health, attack, strength & intelligence", () => {
        const warrior = new Warrior();
        expect(warrior.health).toEqual(200);
        expect(warrior.attack).toEqual(30);
        expect(warrior.strength).toEqual(50);
        expect(warrior.intelligence).toEqual(10);
    });
});