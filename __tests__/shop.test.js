import {Shop} from "../src/shop.js"
import {Wizard} from "../src/PlayerTypes/wizard"

// constructor
describe("Shop", () => {
    let shop;
    beforeEach(() => {
        shop = new Shop();
    });

    test("should create a shop object with available potions", () => {
        expect(shop.availablePotions.length).toEqual(1);
    });
    test("should return true if you try to buy something with enough currency", () => {
        let wizard = new Wizard();
        expect(shop.buy(0, wizard)).toEqual(true);
    });
    test("should return false if you try to buy something with not enough currency", () => {
        let wizard = new Wizard();
        wizard.currency = 5;
        expect(shop.buy(0, wizard)).toEqual(false);
    });
    test("should purchase the item if account has enough", () => {
        let wizard = new Wizard();
        wizard.inventory = [];
        shop.buy(0, wizard)
        expect(wizard.inventory[0]).toEqual({"potion": 50});
    });
    test("should take money out of the account if purchased", () => {
        let wizard = new Wizard();
        wizard.inventory = [];
        shop.buy(0, wizard)
        expect(wizard.inventory[0]).toEqual({"potion": 50});
        expect(wizard.currency).toEqual(980);
    });
});