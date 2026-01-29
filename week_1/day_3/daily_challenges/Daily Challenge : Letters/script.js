// 1. Select the input element
const inputField = document.getElementById('letters');

// 2. Add an event listener for the 'input' event
// The 'input' event triggers every time the value changes 
inputField.addEventListener('input', function(event) {
    
    // 3. Define a Regular Expression that matches anything NOT a letter
    // [^a-zA-Z] means: "any character that is NOT a lowercase or uppercase letter"
    // 'g' means: "global" (check the whole string)
    const regex = /[^a-zA-Z]/g;

    // 4. Replace any non-letter characters with an empty string
    // This effectively "removes" numbers and special characters immediately
    this.value = this.value.replace(regex, '');
});