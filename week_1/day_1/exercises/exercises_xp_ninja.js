// ===== Exercise 1

    // 1. Create two objects with details and a method to calculate BMI
    const person1 = {
        fullName: "John Doe",
        mass: 80,   // in kg
        height: 1.8, // in meters
        calcBMI: function() {
            // We store the result in a new property called 'bmi'
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    const person2 = {
        fullName: "Jane Smith",
        mass: 75,
        height: 1.7,
        calcBMI: function() {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    // 2. Create a function that compares the BMI
    function compareBMI(p1, p2) {
        // Call the methods inside the objects to get the numbers
        const bmi1 = p1.calcBMI();
        const bmi2 = p2.calcBMI();

        if (bmi1 > bmi2) {
            console.log(`${p1.fullName} has the largest BMI (${bmi1.toFixed(2)})`);
        } else if (bmi2 > bmi1) {
            console.log(`${p2.fullName} has the largest BMI (${bmi2.toFixed(2)})`);
        } else {
            console.log("They have the same BMI.");
        }
    }

    // 3. Execute the comparison
    compareBMI(person1, person2);








// ===== Exercise 2

    // Function 1: Pure math logic (Calculate the sum and divide by length)
    function calculateAverage(gradesList) {
        let sum = 0;
        for (let i = 0; i < gradesList.length; i++) {
            sum += gradesList[i];
        }
        return sum / gradesList.length;
    }

    // Function 2: Decision logic (Check if passed or failed)
    function findAvg(gradesList) {
        // We call the first function from inside this one
        const average = calculateAverage(gradesList);
        
        console.log("Your average grade is:", average);

        if (average > 65) {
            console.log("Congratulations, you passed!");
        } else {
            console.log("You failed and must repeat the course.");
        }
    }

    // Testing the function
    const myGrades = [80, 90, 100, 70, 60];
    const badGrades = [40, 50, 60, 30];

    findAvg(myGrades);  // Should pass
    findAvg(badGrades); // Should fail

