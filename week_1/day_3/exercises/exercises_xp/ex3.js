let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}

function highlight() {
    allBoldItems.forEach(item => item.style.color = 'blue');
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => item.style.color = 'black');
}

getBoldItems();
const p = document.getElementById('main-p');
p.addEventListener('mouseover', highlight);
p.addEventListener('mouseout', returnItemsToDefault);