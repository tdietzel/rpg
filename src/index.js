import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Wizard} from "../src/wizard.js";
import {Warrior} from "../src/warrior.js";

// Your JavaScript code for character logic and interactions

// Get references to the UI elements
const wizardLevelElement = document.getElementById('wizard-level');
const wizardHealthElement = document.getElementById('wizard-health');
const wizardExpElement = document.getElementById('wizard-exp');
const wizardHitButton = document.getElementById('wizard-hit');
const wizardPotionButton = document.getElementById('wizard-potion');

const warriorLevelElement = document.getElementById('warrior-level');
const warriorHealthElement = document.getElementById('warrior-health');
const warriorExpElement = document.getElementById('warrior-exp');
const warriorHitButton = document.getElementById('warrior-hit');
const warriorPotionButton = document.getElementById('warrior-potion');

// Create Wizard and Warrior instances
const wizard = new Wizard();
const warrior = new Warrior();

// Update UI with character information
function updateCharacterInfo() {
  wizardLevelElement.textContent = wizard.level;
  wizardHealthElement.textContent = wizard.health;
  wizardExpElement.textContent = wizard.exp;

  warriorLevelElement.textContent = warrior.level;
  warriorHealthElement.textContent = warrior.health;
  warriorExpElement.textContent = warrior.exp;
}

// Add event listeners for character actions
wizardHitButton.addEventListener('click', () => {
  const recipient = warrior; // Assuming the recipient is the Warrior.
  const hasKilled = wizard.hit(recipient);
  updateCharacterInfo();

  if (hasKilled) {
    // Handle the logic when the Wizard kills the recipient (Warrior in this case).
  }
});

wizardPotionButton.addEventListener('click', () => {
  if (wizard.hasPotion()) {
    wizard.usePotion();
    updateCharacterInfo();
  }
});

warriorHitButton.addEventListener('click', () => {
  const recipient = wizard; // Assuming the recipient is the Wizard.
  const hasKilled = warrior.hit(recipient);
  updateCharacterInfo();

  if (hasKilled) {
    // Handle the logic when the Warrior kills the recipient (Wizard in this case).
  }
});

warriorPotionButton.addEventListener('click', () => {
  if (warrior.hasPotion()) {
    warrior.usePotion();
    updateCharacterInfo();
  }
});

// Initial UI update
updateCharacterInfo();