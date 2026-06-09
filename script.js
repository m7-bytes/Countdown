// --- Timeline Benchmarks ---
const startDate = new Date("June 6, 2026 00:00:00").getTime();
const targetDate = new Date("August 28, 2026 20:00:00").getTime(); 
const totalDuration = targetDate - startDate;

// --- Intentional Duas for Active Worship (Ibadah) ---
const weddingQuotes = [
    {
        text: "“Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.”",
        ref: "Surah Al-Furqan [25:74]"
    },
    {
        text: "“May Allah bless you, and shower His blessings upon you, and join the two of you together in beautiful goodness.”",
        ref: "Prophetic Supplication for Marital Union"
    },
    {
        text: "“O Allah, we ask You for the goodness of this journey ahead, and the best of what follows it, clothing us in affection and mercy.”",
        ref: "Supplication for Blessings & Protection"
    },
    {
        text: "“O Allah, make our companion a means for us to draw closer to Your pleasure, and gather our souls together in Your eternal Jannah.”",
        ref: "Supplication for a Righteous Companionship"
    },
    {
        text: "“Glory be to Him Who created all pairs, from what the earth grows and from themselves and from that which they do not know.”",
        ref: "Surah Ya-Sin [36:36] • Contemplative Worship"
    }
];

// Function to pull a random dua on each page load
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * weddingQuotes.length);
    const selected = weddingQuotes[randomIndex];
    
    document.getElementById("quran-quote").innerText = selected.text;
    document.getElementById("quran-surah").innerText = selected.ref;
}

// Main Counter and Progress Calculations
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    
    const percentValue = document.getElementById("percent-value");
    const progressBlockFill = document.getElementById("progress-block-fill");
    
    const countdownArea = document.getElementById("main-countdown-area");
    const surpriseArea = document.getElementById("surprise-reveal-area");

    // Handle timer expiration & Day-of Surprise Transformation
    if (difference <= 0) {
        clearInterval(timerInterval);
        
        // Hide standard countdown view
        if (countdownArea) countdownArea.style.display = "none";
        
        // Smoothly reveal the romantic statement
        if (surpriseArea && !surpriseArea.classList.contains("surprise-visible")) {
            surpriseArea.classList.remove("surprise-hidden");
            surpriseArea.classList.add("surprise-visible");
        }
        return;
    }

    // Calculate percentage completed from June 6th up to target date & time
    const timePassed = now - startDate;
    let percentage = (timePassed / totalDuration) * 100;
    
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    // Update progress block components
    percentValue.innerText = percentage.toFixed(4) + "%";
    progressBlockFill.style.width = percentage.toFixed(2) + "%";

    // Standard breakdown metrics
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Apply leading zeros to maintain symmetrical box framework
    daysElement.innerText = days < 10 ? "0" + days : days;
    hoursElement.innerText = hours < 10 ? "0" + hours : hours;
    minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Initialize random quote selection
displayRandomQuote();

// Run counting loops
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
