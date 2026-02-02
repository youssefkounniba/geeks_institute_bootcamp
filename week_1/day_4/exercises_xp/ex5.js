// 1. Function Declaration
function convertToGramsDeclaration(kg) {
    return kg * 1000;
}
console.log(`Declaration: ${convertToGramsDeclaration(2)}g`); // Invocation


// 2. Function Expression
const convertToGramsExpression = function(kg) {
    return kg * 1000;
};
console.log(`Expression: ${convertToGramsExpression(2)}g`); // Invocation


// 3. Difference: 
// Function declarations are hoisted (can be called before they are defined in the code), whereas function expressions are not hoisted and cannot be used until the script reaches the line where they are defined.


// 4. One-line Arrow Function
const convertToGramsArrow = kg => kg * 1000;
console.log(`Arrow: ${convertToGramsArrow(2)}g`); // Invocation