// --- Timeline Benchmarks ---
const startDate = new Date("June 6, 2026 00:00:00").getTime();
const targetDate = new Date("August 28, 2026 20:00:00").getTime(); // Updated to 8:00 PM
const totalDuration = targetDate - startDate;

// --- Timeless Quranic & Islamic Quotes Array ---
const weddingQuotes = [
    {
        text: "“And He has placed between you affection and mercy.”",
        ref: "Surah Ar-Rum [30:21]"
    },
    {
        text: "“They are comforting garments for you, and you are the same for them.”",
        ref: "Surah Al-Baqarah [2:187]"
    },
    {
        text: "“Our Lord, grant us from among our spouses and offspring comfort to our eyes.”",
        ref: "Surah Al-Furkan [25:74]"
    },
    {
        text: "“And We created you in pairs.”",
        ref: "Surah An-Naba [78:8]"
    },
    {
        text: "“May Allah bless you, and shower His blessings upon you, and join you together in goodness.”",
        ref: "Prophetic Dua (Sunan Abi Dawud)"
    }
];

// Function to pull a random quote on each page load
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

    // Calculate percentage completed from June 6th up to target date & time
    const timePassed = now - startDate;
    let percentage = (timePassed / totalDuration) * 100;
    
    // Safety guardrails for timeline limits
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    // Update progress block components
    percentValue.innerText = percentage.toFixed(4) + "%";
    progressBlockFill.style.width = percentage.toFixed(2) + "%";

    // Handle timer expiration
    if (difference < 0) {
        clearInterval(timerInterval);
        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";
        percentValue.innerText = "100.0000%";
        progressBlockFill.style.width = "100%";
        return;
    }

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

// Fire random quote selection on immediate script execute
displayRandomQuote();

// Run counting loops
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
