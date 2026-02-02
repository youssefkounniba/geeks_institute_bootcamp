(function(userName) {
    // 1. Find the navbar element in the DOM
    const navbar = document.getElementById("navbar");

    // 2. Create a new div to hold the user info
    const userDiv = document.createElement("div");
    
    // 3. Add a class for styling (optional but recommended)
    userDiv.classList.add("user-info");

    // 4. Use Template Strings to create the inner content
    // I'm using a placeholder image service for the profile picture
    userDiv.innerHTML = `
        <span>Welcome, ${userName}</span>
        <img src="https://ui-avatars.com/api/?name=${userName}&background=random" alt="Profile Picture">
    `;

    // 5. Append the new div to the navbar
    navbar.appendChild(userDiv);

})("Youssef");