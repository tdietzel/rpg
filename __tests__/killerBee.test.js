import {killerBee} from "../src/EnemyTypes/killerBee";

describe("KillerBee", () => {
    // constructor
    test("should create a KillerBee object with health, attack, level & position/velocity", () =>{
        expect(killerBee.health).toEqual(50);
        expect(killerBee.attack).toEqual(10);
        expect(killerBee.level).toEqual(1);
        expect(killerBee.position).toEqual({"x": 0, "y": 0});
        expect(killerBee.velocity).toEqual({"x": 0, "y": 0});
    });
});