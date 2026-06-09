// Target date: August 28, 2026 at Midnight
const targetDate = new Date("August 28, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Target the specific display areas in our HTML
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const messageElement = document.getElementById("status-message");

    // Action to take once the timer hits zero or passes the date
    if (difference < 0) {
        clearInterval(timerInterval);
        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";
        messageElement.innerHTML = "<strong>The Day Has Arrived.</strong> Forever begins today.";
        return;
    }

    // Standard time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Render numbers on page; pre-pend a '0' if the value drops below 10 for absolute design alignment
    daysElement.innerText = days < 10 ? "0" + days : days;
    hoursElement.innerText = hours < 10 ? "0" + hours : hours;
    minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Initial pull on load to prevent any visible text jumps, then refreshing every 1 second
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
