// Part I: Alert after 2 seconds
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II: Add paragraph after 2 seconds
setTimeout(function() {
    addParagraph();
}, 2000);

// Part III: Interval
const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');

// Function to add paragraph
function addParagraph() {
    const newP = document.createElement('p');
    newP.textContent = "Hello World";
    container.appendChild(newP);

    // Stop interval if there are 5 paragraphs
    if (container.querySelectorAll('p').length >= 5) {
        stopInterval();
    }
}

// Start the interval (every 2 seconds)
let timer = setInterval(addParagraph, 2000);

// Stop interval function
function stopInterval() {
    clearInterval(timer);
    console.log("Interval cleared");
}

// Clear on button click
clearBtn.addEventListener('click', stopInterval);