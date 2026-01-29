// 1. Retrieve h1
const h1 = document.querySelector('h1');
console.log(h1);

// 2. Remove last paragraph
const article = document.querySelector('article');
article.lastElementChild.remove();

// 3. H2 background red on click
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => h2.style.backgroundColor = 'red');

// 4. Hide h3 on click
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => h3.style.display = 'none');

// 5. Button for bold text
const btn = document.getElementById('bold-btn');
btn.addEventListener('click', () => {
    document.querySelectorAll('p').forEach(p => p.style.fontWeight = 'bold');
});

// BONUS 1: Random h1 size on hover
h1.addEventListener('mouseover', () => {
    h1.style.fontSize = Math.floor(Math.random() * 101) + "px";
});

// BONUS 2: Fade out 2nd paragraph
const p2 = document.getElementById('second-p');
p2.style.transition = "opacity 1s";
p2.addEventListener('mouseover', () => p2.style.opacity = '0');