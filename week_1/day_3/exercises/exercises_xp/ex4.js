document.getElementById('MyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const r = parseFloat(document.getElementById('radius').value);
    const volumeField = document.getElementById('volume');

    if (!isNaN(r)) {
        // Formula: (4/3) * PI * r^3
        const vol = (4/3) * Math.PI * Math.pow(r, 3);
        volumeField.value = vol.toFixed(2);
    }
});