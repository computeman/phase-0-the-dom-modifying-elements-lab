// Write your code here!
// Remove the main#main element
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id of the new h1 element to 'victory'
newHeader.id = 'victory';

newHeader.textContent = 'DAUDI-MWANZIA is the champion';
// Append new h1 element to the body
document.body.appendChild(newHeader);
