// Exercise 5: Users
const container = document.getElementById("container");
const lists = document.querySelectorAll(".list");

// 1. Change Pete to Richard
lists[0].children[1].textContent = "Richard";

// 2. Delete the second <li> of the second <ul> (This deletes Sarah)
lists[1].children[1].remove(); 

// 3. Change first <li> of each <ul> to your name
for (let list of lists) {
    list.children[0].textContent = "Youssef";
}

// 4. Classes & Styles
lists.forEach(list => list.classList.add("student_list"));
lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// 5. Hide Dan (using display: none)
const allLi = document.querySelectorAll("li");
allLi.forEach(li => {
    if (li.textContent === "Dan") li.style.display = "none";
    if (li.textContent === "Richard") li.style.border = "1px solid black";
});

document.body.style.fontSize = "20px";


// Exercise 6: Navbar
const nav = document.getElementById("socialNetworkNavigation") || document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
newLi.innerHTML = '<a href="#">Logout</a>'; // Making it a link to match others
nav.querySelector("ul").appendChild(newLi);


// Exercise 7: Books
const allBooks = [
    { 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        // This link is from a high-stability image server
        image: "https://picsum.photos/100/150", 
        alreadyRead: true 
    },
    { 
        title: "Harry Potter", 
        author: "J.K. Rowling", 
        image: "https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg", 
        alreadyRead: false 
    }
];

image: "https://picsum.photos/100/150"

const section = document.querySelector(".listBooks");
allBooks.forEach(book => {
    const div = document.createElement("div");
    div.style.marginBottom = "20px";
    
    const p = document.createElement("p");
    p.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) p.style.color = "red";

    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    div.appendChild(p);
    div.appendChild(img);
    section.appendChild(div);
});