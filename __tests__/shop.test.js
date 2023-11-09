import {Shop} from "../src/shop.js"
// constructor
describe("Shop", () => {
    test("should create a shop object with available potions", () => {
        let shop = new Shop();
        expect(shop.availablePotions.length).toEqual(3);
    });
});