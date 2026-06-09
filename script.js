const weddingDate =
new Date(
“2026-08-28T20:00:00+05:30”
);

const journeyStart =
new Date(
“2026-06-06T00:00:00+05:30”
);

const messages = [

“Journey To Forever”,

“Only A Few Sunrises Left”,

“Until Qubool Hai”,

“Maaz ❤ Simra”,

“28 August 2026”,

“Journey To Nikah”

];

let messageIndex = 0;

setInterval(() => {

const status =
document.getElementById(
“statusMessage”
);

if(status){

status.innerText =
messages[
messageIndex %
messages.length
];

messageIndex++;

}

},4000);

const circle =
document.getElementById(
“progressCircle”
);

const radius = 100;

const circumference =
2 * Math.PI * radius;

if(circle){

circle.style.strokeDasharray =
circumference;

circle.style.strokeDashoffset =
circumference;

}

function updateCountdown(){

const now =
new Date();

const distance =
weddingDate - now;

if(distance <= 0){

const celebration =
document.getElementById(
“celebration”
);

const hero =
document.querySelector(
“.hero”
);

const countdown =
document.querySelector(
“.countdown”
);

const progress =
document.querySelector(
“.progress-section”
);

const stats =
document.querySelector(
“.stats”
);

const verse =
document.querySelector(
“.verse”
);

if(hero) hero.style.display=“none”;
if(countdown) countdown.style.display=“none”;
if(progress) progress.style.display=“none”;
if(stats) stats.style.display=“none”;
if(verse) verse.style.display=“none”;

if(celebration){
celebration.style.display =
“block”;
}

return;

}

const days =
Math.floor(
distance /
(10006060*24)
);

const hours =
Math.floor(
(
distance %
(1000606024)
)
/
(100060*60)
);

const minutes =
Math.floor(
(
distance %
(10006060)
)
/
(1000*60)
);

const seconds =
Math.floor(
(
distance %
(1000*60)
)
/
1000
);

document.getElementById(
“days”
).innerText =
String(days)
.padStart(3,“0”);

document.getElementById(
“hours”
).innerText =
String(hours)
.padStart(2,“0”);

document.getElementById(
“minutes”
).innerText =
String(minutes)
.padStart(2,“0”);

document.getElementById(
“seconds”
).innerText =
String(seconds)
.padStart(2,“0”);

const totalJourney =
weddingDate -
journeyStart;

const elapsed =
now -
journeyStart;

const progressValue =
Math.max(
0,
Math.min(
100,
(
elapsed /
totalJourney
)
*
100
)
);

document.getElementById(
“progressPercent”
).innerText =
progressValue
.toFixed(1)
+
“%”;

if(circle){

const offset =
circumference -
(
progressValue /
100
)
*
circumference;

circle.style.strokeDashoffset =
offset;

}

document.getElementById(
“sunrises”
).innerText =
days;

document.getElementById(
“hoursLeft”
).innerText =
Math.floor(
distance /
(10006060)
)
.toLocaleString();

document.getElementById(
“weeksLeft”
).innerText =
Math.ceil(
days / 7
);

document.getElementById(
“minutesLeft”
).innerText =
Math.floor(
distance /
(1000*60)
)
.toLocaleString();

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

/* STAR FIELD */

const stars =
document.getElementById(
“stars”
);

if(stars){

for(
let i = 0;
i < 180;
i++
){

const star =
document.createElement(
“div”
);

star.className =
“star”;

star.style.left =
Math.random()
*
100
+
“%”;

star.style.top =
Math.random()
*
100
+
“%”;

star.style.animationDelay =
Math.random()
*
5
+
“s”;

stars.appendChild(
star
);

}

}