import {Wizard} from "../src/wizard.js"
import {Warrior} from "../src/warrior.js"

import { PlayerManager } from "../src/playerManager";
describe("PlayerManager", () => {
    let playerManager;
    beforeEach(() => {
        playerManager = new PlayerManager();
    })

    test("should create a PlayerManager object with activePlayers", () =>{
        expect(playerManager.activePlayers).toEqual([]);
    });
    test("should add a player to the activePlayers array", () =>{
        const wizard = new Wizard();
        playerManager.addPlayer(wizard);
        expect(playerManager.activePlayers).toEqual([wizard]);
    });
    test("should remove a player from the activePlayer array & return their type", () =>{
        const wizard = new Wizard();
        playerManager.addPlayer(wizard);
        const playerRemoved = playerManager.removePlayer(wizard);
        expect(playerManager.activePlayers).toEqual([]);
        expect(playerRemoved).toEqual("Wizard");
    });
    test("should return false if the player isn't found", () =>{
        const wizard = new Wizard();
        const playerRemoved = playerManager.removePlayer(wizard);
        expect(playerRemoved).toEqual(false);
    });
});