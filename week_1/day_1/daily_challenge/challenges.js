// ====== Daily Challenge 1

    // 1. Create the variable
    let sentence = "The movie is not that bad, I like it";

    // 2. Find the position of the word "not"
    let wordNot = sentence.indexOf("not");

    // 3. Find the position of the word "bad"
    let wordBad = sentence.indexOf("bad");

    // 4. Check the condition
    // We check if "not" exists, if "bad" exists, and if "bad" comes after "not"
    if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
        
        // We want to replace everything from wordNot to wordBad + 3 (the length of "bad")
        // slice(0, wordNot) gets "The movie is "
        // Then we add "good"
        // slice(wordBad + 3) gets the rest of the string after "bad" (e.g., ", I like it")
        
        let firstPart = sentence.slice(0, wordNot);
        let lastPart = sentence.slice(wordBad + 3);
        
        console.log(firstPart + "good" + lastPart);
        
    } else {
        // 5. If conditions aren't met, log the original
        console.log(sentence);
    }







// ====== Daily Challenge 2

console.log("--- Nested Loops Method ---");

// Outer loop runs 6 times (for 6 rows)
for (let i = 1; i <= 6; i++) {
    let rowContent = ""; // Reset the row string for every new row
    
    // Inner loop runs 'i' times
    // (If i is 3, this loop runs 3 times to add 3 stars)
    for (let j = 1; j <= i; j++) {
        rowContent += "* ";
    }
    
    console.log(rowContent);
}


