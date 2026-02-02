/**
 * WEEK 1 DAY 5: OBJECTS AND CLASSES - EXERCISES XP
 */

// 🌟 Exercise 1 : Location
{
    const person = {
        name: 'John Doe',
        age: 25,
        location: {
            country: 'Canada',
            city: 'Vancouver',
            coordinates: [49.2827, -123.1207]
        }
    }

    const {name, location: {country, city, coordinates: [lat, lng]}} = person;

    // OUTPUT: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
    console.log("Exercise 1 Output:");
    console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
}


// 🌟 Exercise 2: Display Student Info
{
    function displayStudentInfo(objUser){
        // Destructuring the parameter
        const {first, last} = objUser;
        return `Your full name is ${first} ${last}`;
    }

    console.log("\nExercise 2 Output:");
    console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
}


// 🌟 Exercise 3: User & id
{
    const users = { user1: 18273, user2: 92833, user3: 90315 };

    // Part 1: Turn object into an array
    const usersArray = Object.entries(users);
    console.log("\nExercise 3 Part 1 Output:", usersArray);

    // Part 2: Multiply user's ID by 2
    const modifiedUsers = usersArray.map(([user, id]) => [user, id * 2]);
    console.log("Exercise 3 Part 2 Output:", modifiedUsers);
}


// Exercise 4 : Person class
{
    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    const member = new Person('John');
    
    // OUTPUT: object
    // Reasoning: Classes in JS are syntactic sugar for objects; an instance created with 'new' is of type 'object'.
    console.log("\nExercise 4 Output:", typeof member);
}


// 🌟 Exercise 5 : Dog class
{
    class Dog {
        constructor(name) {
            this.name = name;
        }
    };

    // Which constructor will successfully extend the Dog class?
    // ANSWER: Option 2
    /*
    class Labrador extends Dog {
        constructor(name, size) {
            super(name); // super() must be called before accessing 'this'
            this.size = size;
        }
    };
    */
    console.log("\nExercise 5 Answer: Option #2 is the correct one.");
}


// 🌟 Exercise 6 : Challenges
{
    // 1. Evaluate Equality
    // [2] === [2] -> false (Different memory references)
    // {} === {}   -> false (Different memory references)

    // 2. Property values
    const object1 = { number: 5 }; 
    const object2 = object1; // object2 points to same reference as object1
    const object3 = object2; // object3 points to same reference as object1
    const object4 = { number: 5}; // object4 is a brand new independent object

    object1.number = 4;
    // object2.number -> 4
    // object3.number -> 4
    // object4.number -> 5
    console.log("\nExercise 6 (Object References):", object2.number, object3.number, object4.number);

    // 3. Classes
    class Animal {
        constructor(name, type, color) {
            this.name = name;
            this.type = type;
            this.color = color;
        }
    }

    class Mammal extends Animal {
        sound(noise) {
            return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
        }
    }

    const farmerCow = new Mammal("Lily", "cow", "brown and white");
    console.log("Exercise 6 (Mammal Class):", farmerCow.sound("Moooo"));
}