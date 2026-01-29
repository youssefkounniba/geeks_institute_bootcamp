// ===== Exercise 1
    function displayNumbersDivisible(divisor = 23) {
        let sum = 0;
        let outcomes = "";

        for (let i = 0; i <= 500; i++) {
            if (i % divisor === 0) {
                outcomes += i + " ";
                sum += i;
            }
        }
        console.log("Outcome:", outcomes);
        console.log("Sum:", sum);
    }

    displayNumbersDivisible(23);


// ===== Exercise 2

    const stock = { "banana": 6, "apple": 0, "pear": 12, "orange": 32, "blueberry":1 };
    const prices = { "banana": 4, "apple": 2, "pear": 1, "orange": 1.5, "blueberry":10 };
    const shoppingList = ["banana", "orange", "apple"];

    function myBill() {
        let totalPrice = 0;

        for (const item of shoppingList) {
            if (item in stock && stock[item] > 0) {
                totalPrice += prices[item];
                stock[item] -= 1; // Bonus: decrease stock
            }
        }
        return totalPrice;
    }

    console.log("Total Bill:", myBill());

// ===== Exercise 3

    function changeEnough(itemPrice, amountOfChange) {
        const values = [0.25, 0.10, 0.05, 0.01];
        let totalChange = 0;

        for (let i = 0; i < amountOfChange.length; i++) {
            totalChange += amountOfChange[i] * values[i];
        }

        return totalChange >= itemPrice;
    }

    console.log(changeEnough(4.25, [25, 20, 5, 0])); // true




// ===== Exercise 4

    const prompt = require('prompt-sync')();

    function hotelCost() {
        let nights;
        while (true) {
            nights = prompt("How many nights? ");
            if (nights && !isNaN(nights)) return nights * 140;
        }
    }

    function planeRideCost() {
        let dest;
        while (true) {
            dest = prompt("Destination? ");
            if (typeof dest === "string" && dest.length > 0) {
                if (dest === "London") return 183;
                if (dest === "Paris") return 220;
                return 300;
            }
        }
    }

    function rentalCarCost() {
        let days;
        while (true) {
            days = prompt("How many days for car? ");
            if (days && !isNaN(days)) {
                let cost = days * 40;
                if (days > 10) cost *= 0.95; // 5% discount
                return cost;
            }
        }
    }

    function totalVacationCost() {
        const hotel = hotelCost();
        const plane = planeRideCost();
        const car = rentalCarCost();
        console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
        console.log("Total:", hotel + plane + car);
    }

    totalVacationCost();






