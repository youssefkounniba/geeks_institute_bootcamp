const prompt = require('prompt-sync')();

// 1. Prompt the user for several words
const userInput = prompt("Please enter several words separated by commas: ");

// 2. Put the words into an array
// We use .split(',') to break the string at commas
// We use .map(word => word.trim()) to remove extra spaces around words
const words = userInput.split(',').map(word => word.trim());

// 3. Find the length of the longest word
let maxLength = 0;
for (const word of words) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

// 4. Define the frame width
// We add 4 to the maxLength: 1 star + 1 space (left) and 1 space + 1 star (right)
const frameWidth = maxLength + 4;
const border = "*".repeat(frameWidth);

// 5. Console.log the result
console.log(border); // Top border

for (const word of words) {
    // Calculate how many trailing spaces are needed to reach the maxLength
    const spacesNeeded = maxLength - word.length;
    const padding = " ".repeat(spacesNeeded);
    
    console.log(`* ${word}${padding} *`);
}

console.log(border); // Bottom border