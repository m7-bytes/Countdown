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

setInterval(()=>{

document.getElementById(
“statusMessage”
).innerText =
messages[
messageIndex %
messages.length
];

messageIndex++;

},4000);

const ring =
document.getElementById(
“ring”
);

const circumference =
471;

function updateCountdown(){

const now =
new Date();

const distance =
weddingDate -
now;

if(distance <= 0){

document.querySelector(
“.wrapper”
).innerHTML =

`

<div id="celebration">
<div class="just-married">

Maaz ❤ Simra

</div>
<div class="married-date">

JUST MARRIED

28 AUGUST 2026

</div>
</div>
`;

return;

}

const days =
Math.floor(
distance /
(1000 * 60 * 60 * 24)
);

const hours =
Math.floor(
(
distance %
(1000 * 60 * 60 * 24)
)
/
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(
distance %
(1000 * 60 * 60)
)
/
(1000 * 60)
);

const seconds =
Math.floor(
(
distance %
(1000 * 60)
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

const progress =
Math.max(
0,
Math.min(
100,
(
elapsed /
totalJourney
) * 100
)
);

document.getElementById(
“progressPercent”
).innerText =
progress.toFixed(1)
+
“%”;

const offset =
circumference -
(
progress /
100
)
*
circumference;

ring.style.strokeDashoffset =
offset;

document.getElementById(
“sunrises”
).innerText =
days;

document.getElementById(
“hoursLeft”
).innerText =
Math.floor(
distance /
(1000 * 60 * 60)
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
(1000 * 60)
)
.toLocaleString();

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

/* Background Stars */

const stars =
document.getElementById(
“stars”
);

for(
let i = 0;
i < 120;
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
