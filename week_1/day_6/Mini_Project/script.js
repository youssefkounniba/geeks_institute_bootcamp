const robots = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/1?set=set1&size=200x200' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?set=set1&size=200x200' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?set=set1&size=200x200' },
    { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?set=set1&size=200x200' },
    { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?set=set1&size=200x200' },
    { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?set=set1&size=200x200' },
    { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?set=set1&size=200x200' },
    { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?set=set1&size=200x200' },
    { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?set=set1&size=200x200' },
    { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?set=set1&size=200x200' }
];

// 1. Select DOM elements
const cardList = document.getElementById('card-list');
const searchBox = document.getElementById('search-robots');

// 2. Function to display cards
// Use an Arrow Function and the forEach array method
const displayRobots = (robotArray) => {
    // Clear the current list
    cardList.innerHTML = "";

    robotArray.forEach(robot => {
        // Use Object Destructuring to extract properties
        const { name, email, image } = robot;

        // Create the card HTML structure
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="img-bg">
                <img src="${image}" alt="robot">
            </div>
            <h2>${name}</h2>
            <p>${email}</p>
        `;

        cardList.appendChild(card);
    });
};

// 3. Filter logic
// Use the 'input' event to detect typing in real-time
searchBox.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Use the filter array method
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchTerm);
    });

    // Re-render the cards with the filtered list
    displayRobots(filteredRobots);
});

// 4. Initial call to display all robots when page loads
displayRobots(robots);