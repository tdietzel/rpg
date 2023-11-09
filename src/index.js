import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Wizard } from "../src/PlayerTypes/wizard.js";
import { Warrior } from "../src/PlayerTypes/warrior.js";
import {PlayerManager} from "../src/playerManager";
import {Shop} from "../src/shop.js"

// const wizardLevelElement = document.getElementById('wizard-level');
// const wizardHealthElement = document.getElementById('wizard-health');
// const wizardExpElement = document.getElementById('wizard-exp');
// const wizardHitButton = document.getElementById('wizard-hit');
// const wizardPotionButton = document.getElementById('wizard-potion');

// const warriorLevelElement = document.getElementById('warrior-level');
// const warriorHealthElement = document.getElementById('warrior-health');
// const warriorExpElement = document.getElementById('warrior-exp');
// const warriorHitButton = document.getElementById('warrior-hit');
// const warriorPotionButton = document.getElementById('warrior-potion');

// const canvas = document.getElementById('game-canvas');
// const context = canvas.getContext('2d');

// // Create Wizard and Warrior instances
// const wizard = new Wizard();
// const warrior = new Warrior();

// // Character positions for animation
// let wizardX = 50;
// let warriorX = 150;

// // Drinking potion animation
// let wizardDrinkingPotion = false;
// let warriorDrinkingPotion = false;

// // Function to draw characters on the canvas
// function drawCharacters() {
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw Wizard character
//   context.fillStyle = 'blue';
//   context.fillRect(wizardX, 100, 50, 50);
//   context.fillStyle = 'yellow';
//   context.fillRect(wizardX + 5, 80, 40, 30);

//   context.fillStyle = 'red';
//   context.fillRect(warriorX, 100, 50, 50); // Draw the main body of the Warrior

//   context.fillStyle = 'black';
//   context.fillRect(warriorX - 20, 115, 20, 10); // A

//   // Draw potion drinking animations
//   if (wizardDrinkingPotion) {
//     context.fillStyle = 'green';
//     context.fillRect(wizardX + 15, 110, 20, 20);
//   }
//   if (warriorDrinkingPotion) {
//     context.fillStyle = 'green';
//     context.fillRect(warriorX + 15, 110, 20, 20);
//   }
// }

// // Update UI with character information
// function updateCharacterInfo() {
//   wizardLevelElement.textContent = wizard.level;
//   wizardHealthElement.textContent = wizard.health;
//   wizardExpElement.textContent = wizard.exp;

//   warriorLevelElement.textContent = warrior.level;
//   warriorHealthElement.textContent = warrior.health;
//   warriorExpElement.textContent = warrior.exp;
// }

// // Function for character animations
// function animateWizardHit() {
//   // Move the Wizard during a hit animation
//   let animationSteps = 5; // Number of animation steps
//   const deltaX = 20; // Adjust the distance to move

//   function step() {
//     if (animationSteps > 0) {
//       wizardX += deltaX;
//       drawCharacters();
//       animationSteps--;
//       requestAnimationFrame(step);
//     } else {
//       // Animation completed, return the Wizard to the initial position
//       wizardX = 50; // Set the initial position
//       drawCharacters();

//       // Perform the actual hit logic here
//       const recipient = warrior; // Assuming the recipient is the Warrior.
//       const hasKilled = wizard.hit(recipient);
//       updateCharacterInfo();

//       if (hasKilled) {
//         // Handle the logic when the Wizard kills the recipient (Warrior in this case).
//       }
//     }
//   }

//   step();
// }

// function animateWarriorHit() {
//   // Move the Warrior during a hit animation
//   let animationSteps = 5; // Number of animation steps
//   const deltaX = 20; // Adjust the distance to move

//   function step() {
//     if (animationSteps > 0) {
//       warriorX -= deltaX;
//       drawCharacters();
//       animationSteps--;
//       requestAnimationFrame(step);
//     } else {
//       // Animation completed, return the Warrior to the initial position
//       warriorX = 150; // Set the initial position
//       drawCharacters();

//       // Perform the actual hit logic here
//       const recipient = wizard; // Assuming the recipient is the Wizard.
//       const hasKilled = warrior.hit(recipient);
//       updateCharacterInfo();

//       if (hasKilled) {
//         // Handle the logic when the Warrior kills the recipient (Wizard in this case).
//       }
//     }
//   }

//   step();
// }

// // Function for potion drinking animations
// function animateWizardDrinkingPotion() {
//   // Set the drinking potion flag to true
//   wizardDrinkingPotion = true;
//   drawCharacters();

//   // Simulate a delay for the animation
//   setTimeout(() => {
//     // Reset the drinking potion flag
//     wizardDrinkingPotion = false;
//     drawCharacters();
//   }, 1000); // Adjust the duration as needed
// }

// function animateWarriorDrinkingPotion() {
//   // Set the drinking potion flag to true
//   warriorDrinkingPotion = true;
//   drawCharacters();

//   // Simulate a delay for the animation
//   setTimeout(() => {
//     // Reset the drinking potion flag
//     warriorDrinkingPotion = false;
//     drawCharacters();
//   }, 1000); // Adjust the duration as needed
// }

// // Add event listeners for character actions
// wizardHitButton.addEventListener('click', () => {
//   // Animate the Wizard's hit
//   animateWizardHit();
// });

// warriorHitButton.addEventListener('click', () => {
//   // Animate the Warrior's hit
//   animateWarriorHit();
// });

// wizardPotionButton.addEventListener('click', () => {
//   // Animate the Wizard drinking a potion
//   animateWizardDrinkingPotion();
// });

// warriorPotionButton.addEventListener('click', () => {
//   // Animate the Warrior drinking a potion
//   animateWarriorDrinkingPotion();
// });

// // Initial UI update and drawing characters
// updateCharacterInfo();
// drawCharacters();