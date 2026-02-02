/**
 * Checks if the provided argument is a string.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if string, false otherwise.
 */
const isString = (val) => typeof val === 'string';

// Testing the function:
console.log(isString('hello')); 
// Output: true

console.log(isString([1, 2, 4, 0]));
// Output: false

console.log(isString(123));
// Output: false