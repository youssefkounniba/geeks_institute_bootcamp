// ===== Exercise 1

    let numbers = [123, 8409, 100053, 333333333, 7];

    for (let num of numbers) {
        if (num % 3 === 0) {
            console.log(`${num}: true`);
        } else {
            console.log(`${num}: false`);
        }
    }






// ===== Exercise 2

    
    const prompt = require('prompt-sync')(); 

    let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
    }

    let nameInput = prompt("What is your name? ").toLowerCase();

    // The "in" operator checks if the name exists as a key in our object
    if (nameInput in guestList) {
        console.log(`Hi! I'm ${nameInput}, and I'm from ${guestList[nameInput]}.`);
    } else {
        console.log("Hi! I'm a guest.");
    }







// ===== Exercise 3

    let age = [20, 5, 12, 43, 98, 55];

    // 1. Console.log the sum of all the numbers
    let sum = 0;
    for (let i = 0; i < age.length; i++) {
        sum += age[i];
    }
    console.log("The sum is:", sum);


    // 2. Console.log the highest age
    // We start by assuming the first number is the highest
    let highest = age[0]; 

    for (let i = 1; i < age.length; i++) {
        // If the current number is bigger than our 'highest' variable, update it
        if (age[i] > highest) {
            highest = age[i];
        }
    }
    console.log("The highest age is:", highest);






