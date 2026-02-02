/**
 * DAILY CHALLENGE: CREATE OBJECTS
 */

// 1. Create a class named Video
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // 2. Create a method called watch()
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// 3. Instantiate a new Video instance and call watch()
const video1 = new Video("JavaScript Basics", "John Doe", 300);
video1.watch();

// 4. Instantiate a second Video instance with different values
const video2 = new Video("CSS Layouts", "Jane Smith", 600);
video2.watch();


// --- BONUS SECTION ---

// Bonus: Use an array to store data for five Video instances
// The best data structure here is an Array of Objects.
const videoData = [
    {
        title: "Introduction to React",
        uploader: "Alice",
        time: 1200
    },
    {
        title: "Node.js Tutorial",
        uploader: "Bob",
        time: 1500
    },
    {
        title: "Python for Beginners",
        uploader: "Charlie",
        time: 900
    },
    {
        title: "HTML5 Masterclass",
        uploader: "David",
        time: 2000
    },
    {
        title: "SQL Databases",
        uploader: "Eve",
        time: 1100
    }
];

// Bonus: Loop through the array to instantiate those instances
const videoInstances = [];

videoData.forEach(item => {
    // Create the instance
    const newVideo = new Video(item.title, item.uploader, item.time);
    
    // Push it to our instances array
    videoInstances.push(newVideo);
});

// Verify by calling the watch method for each newly created instance
console.log("\n--- Bonus Loop Results ---");
videoInstances.forEach(vid => vid.watch());