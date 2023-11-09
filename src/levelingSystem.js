class LevelingSystem {
    constructor() {}

    checkLevel(exp) {
      if (exp < 1000) {
        return 1;
      } else if (exp >= 1000 && exp <= 1999) {
        return 2;
      } else if (exp >= 2000 && exp <= 2999) {
        return 3;
      } else if (exp >= 3000 && exp <= 3999) {
        return 4;
      } else {
        return 5;
      }
    }
  
    getLevelStats(level) {
      switch (level) {
        case 1:
          return { health: 0, attack: 0, strength: 0, intelligence: 0 };
        case 2:
          return { health: 50, attack: 0, strength: 0, intelligence: 10 };
        case 3:
          return { health: 50, attack: 50, strength: 0, intelligence: 20 };
        case 4:
          return { health: 200, attack: 50, strength: 5, intelligence: 25 };
        case 5:
          return { health: 250, attack: 0, strength: 0, intelligence: 25 };
      }
    }
  }

  export let levelSystem = new LevelingSystem();