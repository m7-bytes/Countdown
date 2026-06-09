const weddingDate =
new Date(
"2026-08-28T20:00:00+05:30"
);

const journeyStart =
new Date(
"2026-06-06T00:00:00+05:30"
);

const messages = [

"Journey To Forever",

"Every Day Brings Us Closer",

"Maaz ❤ Simra",

"Only A Few Sunrises Left",

"Until Qubool Hai",

"28 August 2026"

];

let msgIndex = 0;

setInterval(()=>{

document.getElementById(
"status"
).innerText =
messages[
msgIndex %
messages.length
];

msgIndex++;

},4000);

function flipNumber(
id,
value
){

const el =
document.getElementById(
id
);

el.style.transform =
"rotateX(90deg)";

setTimeout(()=>{

el.innerText =
value;

el.style.transform =
"rotateX(0deg)";

},150);

}

const ring =
document.getElementById(
"ring"
);

const circumference =
471;

function updateCountdown(){

const now =
new Date();

const distance =
weddingDate -
now;

if(
distance <= 0
){

document.getElementById(
"mainContent"
).style.display =
"none";

document.getElementById(
"celebration"
).style.display =
"block";

return;

}

const days =
Math.floor(
distance /
(1000*60*60*24)
);

const hours =
Math.floor(
(
distance %
(1000*60*60*24)
)
/
(1000*60*60)
);

const minutes =
Math.floor(
(
distance %
(1000*60*60)
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

flipNumber(
"days",
String(days)
.padStart(
3,
"0"
)
);

flipNumber(
"hours",
String(hours)
.padStart(
2,
"0"
)
);

flipNumber(
"minutes",
String(minutes)
.padStart(
2,
"0"
)
);

flipNumber(
"seconds",
String(seconds)
.padStart(
2,
"0"
)
);

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
)
*100
)
);

document.getElementById(
"progressPercent"
).innerText =
progress
.toFixed(1)
+
"%";

const offset =
circumference -
(
progress /
100
)
*
circumference;

ring.style
.strokeDashoffset =
offset;

document.getElementById(
"sunrises"
).innerText =
days;

document.getElementById(
"hoursLeft"
).innerText =
Math.floor(
distance /
(1000*60*60)
)
.toLocaleString();

document.getElementById(
"weeksLeft"
).innerText =
Math.ceil(
days/7
);

document.getElementById(
"minutesLeft"
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

const stars =
document.getElementById(
"stars"
);

for(
let i=0;
i<120;
i++
){

const star =
document.createElement(
"div"
);

star.className =
"star";

star.style.left =
Math.random()
*
100
+
"%";

star.style.top =
Math.random()
*
100
+
"%";

star.style.animationDelay =
Math.random()
*
5
+
"s";

stars.appendChild(
star
);

}

</script>

</body>

</html>
