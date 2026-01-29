// Exercise 1: Random Number
const randNum = Math.floor(Math.random() * 100) + 1;
console.log("Random Number chosen:", randNum);
for (let i = 0; i <= randNum; i++) {
    if (i % 2 === 0) console.log(i);
}

// Exercise 2: Capitalized letters
function capitalize(str) {
    let evenCaps = "";
    let oddCaps = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i].toLowerCase();
        } else {
            evenCaps += str[i].toLowerCase();
            oddCaps += str[i].toUpperCase();
        }
    }
    return [evenCaps, oddCaps];
}
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

// Exercise 3 : Is palindrome?
function isPalindrome(str) {
    // Reverse the string and compare to original
    let reversed = str.split("").reverse().join("");
    return str.toLowerCase() === reversed.toLowerCase();
}
console.log("Is 'madam' a palindrome?", isPalindrome("madam")); // true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // false

// Exercise 4 : Biggest Number
function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) return 0;
    
    let max = 0;
    for (let item of arrayNumber) {
        // Only compare if the item is actually a number
        if (typeof item === 'number' && item > max) {
            max = item;
        }
    }
    return max;
}
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2])); // 4
console.log(biggestNumberInArray([])); // 0

// Exercise 5: Unique Elements
function unique(arr) {
    // A Set automatically removes duplicates
    return [...new Set(arr)];
}
console.log(unique([1,2,3,3,3,3,4,5])); // [1,2,3,4,5]