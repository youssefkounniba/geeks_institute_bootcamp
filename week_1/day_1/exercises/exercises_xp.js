// ===== Exercise 1

    const people = ["Greg", "Mary", "Devon", "James"];

    // 1. Write code to remove “Greg” from the people array.
    people.shift();

    // 2. Write code to replace “James” to “Jason”.
    // Note: After shift(), "James" is at index 2
    people[2] = "Jason";

    // 3. Write code to add your name to the end of the people array.
    people.push("Youssef"); // Replace "Yourname" with your actual name

    // 4. Write code that console.logs Mary’s index.
    console.log(people.indexOf("Mary"));

    // 5. Write code to make a copy of the people array using the slice method.
    // The copy should NOT include “Mary” or your name.
    // Current array: ["Mary", "Devon", "Jason", "Yourname"]
    // We want "Devon" and "Jason" (index 1 and 2)
    const peopleCopy = people.slice(1, 3);
    console.log(peopleCopy);

    // 6. Write code that gives the index of “Foo”. 
    console.log(people.indexOf("Foo"));
    // Why does it return -1? 
    // Answer: It returns -1 because "Foo" does not exist in the array.

    // 7. Create a variable called last which value is the last element of the array.
    let last = people[people.length - 1];
    console.log(last);


    // Using the current people array: ["Mary", "Devon", "Jason", "Yourname"]

    // 1. Using a loop, iterate through the people array and console.log each person.
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }

    // 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon”.
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if (people[i] === "Devon") {
            break;
        }
    }   










// ===== Exercise 2

    const colors = ["Blue", "Green", "Red", "Purple", "Black"];
    const suffixes = ["st", "nd", "rd", "th", "th"];

    for (let i = 0; i < colors.length; i++) {
        // Basic version
        console.log(`My #${i + 1} choice is ${colors[i]}`);
        
        // Bonus version
        console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
    }










// ===== Exercise 3

let number = 0; 

console.log("Simulating prompt logic for terminal...");

while (number < 10) {
    console.log(`Number ${number} is less than 10, asking again...`);
    number += 2; // Manually increasing so the loop eventually ends
}

console.log("Final number is:", number);







// ===== Exercise 4

    const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent:  {
            sarah: [3, 990],
            dan:  [4, 1000],
            david: [1, 500],
        },
    }

    // 2. Number of floors
    console.log("Floors:", building.numberOfFloors);

    // 3. Apartments on floor 1 and 3
    console.log("Apts on Floor 1:", building.numberOfAptByFloor.firstFloor);
    console.log("Apts on Floor 3:", building.numberOfAptByFloor.thirdFloor);

    // 4. Second tenant and his rooms
    const secondTenant = building.nameOfTenants[1]; // Dan
    const danRooms = building.numberOfRoomsAndRent.dan[0];
    console.log(`${secondTenant} has ${danRooms} rooms.`);

    // 5. Rent check
    const sarahRent = building.numberOfRoomsAndRent.sarah[1];
    const davidRent = building.numberOfRoomsAndRent.david[1];
    const danRent = building.numberOfRoomsAndRent.dan[1];

    if (sarahRent + davidRent > danRent) {
        building.numberOfRoomsAndRent.dan[1] = 1200;
        console.log("Dan's new rent is:", building.numberOfRoomsAndRent.dan[1]);
    }







// ===== Exercise 5

    const family = {
        lastName: "Smith",
        members: 4,
        city: "London"
    };

    // Log keys
    for (let key in family) {
        console.log("Key:", key);
    }

    // Log values
    for (let key in family) {
        console.log("Value:", family[key]);
    }







    // ===== Exercise 6

    const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
    }

    let sentence = "";
    for (let key in details) {
        sentence += `${key} ${details[key]} `;
    }

    console.log(sentence.trim());








    // ===== Exercise 7

    const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
    let initials = [];

    for (const name of names) {
        initials.push(name[0]); // Get first letter
    }

    // Sort alphabetically and join into a string
    const secretName = initials.sort().join("");

    console.log(secretName); // Output: "ABJKPS"



