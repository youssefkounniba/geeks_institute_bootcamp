let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Arrow function to display fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// 2. Arrow function cloneGroceries
const cloneGroceries = () => {
    // --- PART 1: Primitives (Pass by Value) ---
    let user = client; 
    client = "Betty";
    
    // Question: Will we also see this modification in the user variable?
    // Answer: No. 
    // Why: "client" is a string, which is a primitive type. Primitives are passed by VALUE. 
    // When we set user = client, JS copied the value "John" into a new spot in memory for 'user'. 
    // Changing 'client' later does not affect 'user'.
    console.log(`Client is: ${client}`); // Betty
    console.log(`User is: ${user}`);     // John


    // --- PART 2: Objects (Pass by Reference) ---
    let shopping = groceries;
    
    // Change totalPrice to 35$
    groceries.totalPrice = "35$";
    // Question: Will we also see this modification in the shopping object?
    // Answer: Yes.
    // Why: "groceries" is an object. Objects are passed by REFERENCE. 
    // 'shopping' and 'groceries' both point to the same address in memory. 
    // If you change the original, the "clone" sees it because they are the same object.

    // Change paid to false
    groceries.other.paid = false;
    // Question: Will we also see this modification in the shopping object?
    // Answer: Yes.
    // Why: For the same reason as above. Even though 'paid' is nested inside 'other', 
    // 'shopping' is still referencing the exact same memory structure as 'groceries'.

    console.log("Groceries Total Price:", groceries.totalPrice); // 35$
    console.log("Shopping Total Price:", shopping.totalPrice);   // 35$
    
    console.log("Groceries Paid:", groceries.other.paid); // false
    console.log("Shopping Paid:", shopping.other.paid);   // false
};

// Invoke the functions
displayGroceries();
cloneGroceries();