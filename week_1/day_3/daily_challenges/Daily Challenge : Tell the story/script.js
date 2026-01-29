// 1. Get references to the form and the span where the story will appear
const libForm = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-button');

// Function to generate the story
function writeStory(event) {
    // Prevent the page from refreshing on form submit
    event.preventDefault();

    // 2. Get the values of all inputs
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    // 3. Make sure values are not empty
    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        alert("Please fill in all the blanks!");
        return;
    }

    // 4. Create the story
    const story = `${person} went to the ${place} to find a ${adjective} ${noun}. It was a strange day because they decided to ${verb} all the way home!`;

    // 5. Display the story
    storySpan.innerText = story;
}

// 6. Bonus: Shuffle Logic
function shuffleStory() {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    // Safety check: don't shuffle if inputs are empty
    if (noun === "" || adjective === "") {
        alert("Fill the form first!");
        return;
    }

    // Array of different story templates
    const stories = [
        `Once upon a time, ${person} saw a ${adjective} ${noun} while trying to ${verb} in ${place}.`,
        `In the middle of ${place}, ${person} realized that a ${noun} can actually be quite ${adjective} if you ${verb} it correctly.`,
        `${person} loves to ${verb} with a ${adjective} ${noun} whenever they visit ${place}.`
    ];

    // Pick a random story from the array
    const randomIndex = Math.floor(Math.random() * stories.length);
    storySpan.innerText = stories[randomIndex];
}

// Event Listeners
libForm.addEventListener('submit', writeStory);
shuffleBtn.addEventListener('click', shuffleStory);