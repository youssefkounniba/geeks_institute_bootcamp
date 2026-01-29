function myMove() {
    const box = document.getElementById('animate');
    let pos = 0; // Current position
    
    // The container is 400px wide and the box is 50px wide.
    // The box needs to stop when it hits 350px (400 - 50).
    const limit = 350;

    const id = setInterval(function() {
        if (pos >= limit) {
            clearInterval(id); // Stop the animation
        } else {
            pos++; // Increment position
            box.style.left = pos + 'px'; // Move to the right
        }
    }, 1); // Run every 1 millisecond
}