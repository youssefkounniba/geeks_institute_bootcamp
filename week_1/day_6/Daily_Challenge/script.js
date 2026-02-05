function isAnagram(str1, str2) {
    // 1. Clean the strings: remove all whitespace and convert to lowercase
    const cleanStr1 = str1.split(' ').join('').toLowerCase();
    const cleanStr2 = str2.split(' ').join('').toLowerCase();

    // 2. Sort the characters of both strings using Array methods
    // .split('') turns the string into an array of characters
    // .sort() puts them in alphabetical order
    // .join('') turns the array back into a string for comparison
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // 3. Compare the sorted strings and return the boolean result
    return sortedStr1 === sortedStr2;
}

// Testing the examples
console.log(isAnagram("Astronomer", "Moon starer"));    // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Hello", "World"));               // false