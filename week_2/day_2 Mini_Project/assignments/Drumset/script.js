function playSound(e) {
    // Determine the key code (handle both keyboard and click events)
    const keyCode = e.keyCode || this.getAttribute('data-key');
    
    // 1. Select the audio element and the visual key element
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return; // Stop the function if no audio exists for that key

    // 2. Play the audio
    audio.currentTime = 0; // Rewind to the start so sounds can be "spammed"
    audio.play();

    // 3. Add visual effect
    key.classList.add('playing');
}

function removeTransition(e) {
    // Only remove the class if the transition that finished was the 'transform'
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Event Listeners
const keys = document.querySelectorAll('.key');

// Handle Mouse Clicks
keys.forEach(key => {
    key.addEventListener('click', playSound);
    // Remove effect after the CSS transition finishes
    key.addEventListener('transitionend', removeTransition);
});

// Handle Keyboard Presses
window.addEventListener('keydown', playSound);