import {Wizard} from "../src/wizard.js"
import {Warrior} from "../src/warrior.js"
import {PlayerManager} from "../src/playerManager";

describe("PlayerManager", () => {
    let playerManager;
    beforeEach(() => {
        playerManager = new PlayerManager();
    })
    // constructor
    test("should create a PlayerManager object with activePlayers", () =>{
        expect(playerManager.activePlayers).toEqual([]);
    });

    // adds player
    test("should add a player to the activePlayers array", () =>{
        const wizard = new Wizard();
        playerManager.addPlayer(wizard);
        expect(playerManager.activePlayers).toContain(wizard);
    });

    // removes player
    test("should remove a player from the activePlayer array & return their type", () =>{
        const warrior = new Warrior();
        playerManager.addPlayer(warrior);
        const playerRemoved = playerManager.removePlayer(warrior);
        expect(playerManager.activePlayers.length).toEqual(0);
        expect(playerRemoved).toEqual("Warrior");
    });
    test("should return false if the player isn't found", () =>{
        const wizard = new Wizard();
        const playerRemoved = playerManager.removePlayer(wizard);
        expect(playerRemoved).toEqual(false);
    });
    test("should remove player if health is 0", () =>{
        const wizard = new Wizard();
        const warrior = new Warrior();
        playerManager.addPlayer(wizard);
        playerManager.addPlayer(warrior);
        warrior.attack = 200;
        warrior.hit(wizard);
        playerManager.checkPlayerHealth();
        expect(playerManager.activePlayers).not.toContain(wizard);
    });
    test("should return true if the players health is above 0", () =>{
        const wizard = new Wizard();
        playerManager.addPlayer(wizard);
        expect(playerManager.checkPlayerHealth()).toEqual(true);
    });
});