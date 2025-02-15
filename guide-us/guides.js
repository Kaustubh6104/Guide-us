// Sample guides data
const guides = [
    {
        name: "Shahrukh khan",
        destination: "Kolhapur",
        experience: "5 years",
        rating: "⭐⭐⭐⭐⭐",
        price: "1200 rs per day",
        img: "srk.jpeg"
    },
    {
        name: "Salman Khan",
        destination: "mumbai",
        experience: "3 years",
        rating: "⭐⭐⭐⭐",
        price: "1600 rs per day",
        img: "sk.jpeg"
    },
    {
        name: "Aamir Khan",
        destination: "Pune",
        experience: "7 years",
        rating: "⭐⭐⭐⭐⭐",
        price: "900 rs per day",
        img: "ak2.jpeg"
    }
];

// Function to display guides
function displayGuides(filteredGuides) {
    let guideContainer = document.getElementById("guides-list");
    guideContainer.innerHTML = ""; // Clear previous results

    if (filteredGuides.length === 0) {
        guideContainer.innerHTML = "<p style='text-align: center;'>No guides found for this destination.</p>";
        return;
    }

    filteredGuides.forEach(guide => {
        let guideCard = document.createElement("div");
        guideCard.classList.add("guide-card");

        guideCard.innerHTML = `
            <img src="${guide.img}" alt="${guide.name}">
            <h3>${guide.name}</h3>
            <h2>${guide.destination}</h2>
            <p>${guide.experience} Experience</p>
            <p class="rating">${guide.rating}</p>
            <p class="price">${guide.price}</p>
            <button onclick="chatWithGuide('${guide.name}')">Chat Now</button>
        `;
        
        guideContainer.appendChild(guideCard);
    });
}

// Function to search guides by destination
function searchGuides() {
    let destination = document.getElementById("destination-input").value.trim().toLowerCase();
    if (destination === "") {
        alert("Please enter a destination.");
        return;
    }

    let filteredGuides = guides.filter(guide => guide.destination.toLowerCase() === destination);
    displayGuides(filteredGuides);
}

// Dummy chat function
function chatWithGuide(guideName) {
    alert(`Starting chat with ${guideName}...`);
}

// Load all guides initially
document.addEventListener("DOMContentLoaded", () => {
    displayGuides(guides);
});
