const grid = document.getElementById('grid');
const palette = document.getElementById('palette');
const clearBtn = document.getElementById('clear-btn');

let selectedColor = 'black';
let isDrawing = false;

// 1. Create the Palette Colors
const colors = [
    'red', 'orangered', 'orange', 
    'yellow', 'yellowgreen', 'lightgreen',
    'green', 'turquoise', 'cyan',
    'skyblue', 'dodgerblue', 'blue',
    'navy', 'indigo', 'purple',
    'violet', 'pink', 'lightgray',
    'gray', 'black', 'white'
];

colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color-box');
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', () => {
        selectedColor = color;
    });
    palette.appendChild(colorDiv);
});

// 2. Create the Drawing Grid (e.g., 2400 squares)
for (let i = 0; i < 2400; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    // Mousedown: Start drawing and color the first square
    pixel.addEventListener('mousedown', () => {
        isDrawing = true;
        pixel.style.backgroundColor = selectedColor;
    });

    // Mouseover: If we are holding the mouse down, color the squares we pass over
    pixel.addEventListener('mouseover', () => {
        if (isDrawing) {
            pixel.style.backgroundColor = selectedColor;
        }
    });

    grid.appendChild(pixel);
}

// 3. Stop drawing when mouse is released anywhere
window.addEventListener('mouseup', () => {
    isDrawing = false;
});

// 4. Clear Button Logic
clearBtn.addEventListener('click', () => {
    const allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach(p => p.style.backgroundColor = 'white');
});