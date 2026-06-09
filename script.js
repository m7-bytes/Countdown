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

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * weddingQuotes.length);
    const selected = weddingQuotes[randomIndex];
    document.getElementById("quran-quote").innerText = selected.text
