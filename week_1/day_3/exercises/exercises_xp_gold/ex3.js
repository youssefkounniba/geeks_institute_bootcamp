// 1. Create an empty array
let shoppingList = [];

const root = document.getElementById('root');

// Create a UL to display the items visually
const ul = document.createElement('ul');

// 2. Create form elements
const form = document.createElement('form');
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Item to buy...');

const addBtn = document.createElement('button');
addBtn.textContent = "AddItem";
addBtn.setAttribute('type', 'button'); 

form.appendChild(input);
form.appendChild(addBtn);
root.appendChild(form);
root.appendChild(ul); // Add the list to the page

// 3. addItem function
function addItem() {
    const value = input.value.trim();
    if (value !== "") {
        // Add to the JavaScript Array
        shoppingList.push(value);
        
        // --- VISUAL PART: Add to the HTML ---
        const li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
        // ------------------------------------

        console.log("Current Array:", shoppingList);
        input.value = ""; // Clear input field
    }
}

addBtn.addEventListener('click', addItem);

// 4. Create ClearAll button
const clearBtn = document.createElement('button');
clearBtn.textContent = "ClearAll";
root.appendChild(clearBtn);

// 5. clearAll function
function clearAll() {
    // Clear the Array
    shoppingList = [];
    
    // Clear the Visual List
    ul.innerHTML = "";
    
    console.log("List Cleared. Array is now:", shoppingList);
}

clearBtn.addEventListener('click', clearAll);