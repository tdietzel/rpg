import {Experience} from "../src/levels.js"

describe("Experience", () => {
    test("should create a Experience object with levels 1-5", () => {
        const experience = new Experience();
        expect(experience.level1).toEqual(0);
        expect(experience.level2).toEqual(1000);
        expect(experience.level3).toEqual(2000);
        expect(experience.level4).toEqual(3500);
        expect(experience.level5).toEqual(5000);
    });
});