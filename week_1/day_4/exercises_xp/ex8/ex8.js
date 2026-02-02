function makeJuice(size) {
    // 1. Create an empty array named ingredients
    let ingredients = [];

    // 2. Inner function to add ingredients to the array
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    // 3. Inner function to display the final order on the DOM
    function displayJuice() {
        // We use join(", ") to neatly list all items in the array
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        
        // Create a DOM element to display the result
        const p = document.createElement("p");
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    // 4. The client wants 6 ingredients: Invoke addIngredients twice
    addIngredients("Apple", "Ginger", "Lemon");
    addIngredients("Carrot", "Beetroot", "Apple");

    // 5. Invoke displayJuice once
    displayJuice();
}

// 6. Finally, invoke makeJuice in the global scope
makeJuice("large");