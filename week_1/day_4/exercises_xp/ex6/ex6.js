(function(numChildren, partnerName, location, jobTitle) {
    // 1. Create the sentence using Template Strings
    const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;

    // 2. Create a DOM element (like a paragraph) to display the sentence
    const p = document.createElement("p");
    p.textContent = sentence;

    // 3. Append the element to the body of the page
    document.body.appendChild(p);

})(3, "Sarah", "Tokyo", "Full-Stack Developer");