// 1. Create an array of objects for the planets
// An object is better because it stores name, color, and moon count together.
const planets = [
    { name: "Mercury", color: "grey", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "brown", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Select the section where we want to append the planets
const section = document.querySelector(".listPlanets");

// 3. Loop through the planets array
planets.forEach((planet, index) => {
    
    // Create the planet div
    const planetDiv = document.createElement("div");
    
    // Add the "planet" class
    planetDiv.classList.add("planet");
    
    // Add a specific class for the color (as requested in instructions)
    // Alternatively, we set the background color directly
    planetDiv.style.backgroundColor = planet.color;
    
    // Add the name of the planet as text
    planetDiv.textContent = planet.name;
    
    // --- BONUS: Creating Moons ---
    // We will limit the display of moons to 5 per planet so they don't cover the screen,
    // but we use the actual count from our data.
    const displayMoons = Math.min(planet.moons, 5); // Show up to 5 moons visually

    for (let i = 0; i < displayMoons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        // Position each moon slightly differently so they don't overlap
        // We use 'left' to space them out
        moonDiv.style.left = (110 + (i * 35)) + "px";
        
        planetDiv.appendChild(moonDiv);
    }

    // 4. Finally, append to the section
    section.appendChild(planetDiv);
});