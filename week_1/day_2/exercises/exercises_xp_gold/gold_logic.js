// Exercise 1 : is_Blank

function isBlank(str) {
    // Check if the string is empty or contains only spaces
    return str.trim().length === 0;
}
console.log("Is blank (' '):", isBlank(''));    // true
console.log("Is blank ('abc'):", isBlank('abc')); // false













// Exercise 2 : Abbrev_name

function abbrevName(fullName) {
    const names = fullName.trim().split(" ");
    if (names.length > 1) {
        // Return First name + space + first letter of last name + dot
        return `${names[0]} ${names[1].charAt(0)}.`;
    }
    return names[0];
}
console.log("Abbreviated:", abbrevName("Robin Singh")); // "Robin S."








// Exercise 3 : SwapCase

function swapCase(str) {
    let swapped = "";
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}
console.log("Swapped:", swapCase('The Quick Brown Fox')); // 'tHE qUICK bROWN fOX'


// Exercise 4 : Omnipresent value
function isOmnipresent(arr, val) {
    // .every() checks if every sub-array returns true for the condition
    return arr.every(subArray => subArray.includes(val));
}

console.log("Is 1 omnipresent:", isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log("Is 6 omnipresent:", isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false