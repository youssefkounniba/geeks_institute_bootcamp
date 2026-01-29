const form = document.querySelector('form');
console.log(form);

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
console.log(fname, lname);

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page refresh so we can see the result

    const val1 = fname.value.trim();
    const val2 = lname.value.trim();

    if (val1 !== "" && val2 !== "") {
        const ul = document.querySelector('.usersAnswer');
        ul.innerHTML = `<li>${val1}</li><li>${val2}</li>`;
    }
});