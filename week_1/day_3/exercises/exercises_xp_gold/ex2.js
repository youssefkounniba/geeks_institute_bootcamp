function removecolor() {
    const select = document.getElementById('colorSelect');
    // .selectedIndex gives the index of the currently chosen option
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}

const btn = document.getElementById('removeBtn');
btn.addEventListener('click', removecolor);