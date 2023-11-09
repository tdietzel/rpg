import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Wizard} from "../src/wizard.js";
import {Warrior} from "../src/warrior.js";

// JavaScript code to handle UI interactions
const warrior = new Warrior();
const wizard = new Wizard();

// Update the UI with initial values
function updateUI() {
  document.getElementById("warrior-level").textContent = warrior.level;
  document.getElementById("warrior-health").textContent = warrior.health;
  document.getElementById("warrior-exp").textContent = warrior.exp;

  document.getElementById("wizard-level").textContent = wizard.level;
  document.getElementById("wizard-health").textContent = wizard.health;
  document.getElementById("wizard-exp").textContent = wizard.exp;
}

updateUI();

// Event listeners for warrior actions
document.getElementById("warrior-attack").addEventListener("click", () => {
  warrior.hit(wizard);
  updateUI();
});

document.getElementById("warrior-use-potion").addEventListener("click", () => {
  warrior.usePotion();
  updateUI();
});

// Event listeners for wizard actions
document.getElementById("wizard-attack").addEventListener("click", () => {
  wizard.hit(warrior);
  updateUI();
});

document.getElementById("wizard-use-potion").addEventListener("click", () => {
  wizard.usePotion();
  updateUI();
});