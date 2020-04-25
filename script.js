let toBeSorted = [
    `"Noone cared who I was until I put on a mask." -Obito Uchiha`,
];

let cheQuotes = [
    `"Its been 'one of those days' for three years now." -daily Elvin thought`,
    `"18 years man, 18 years. The baby mama's car and crib is bigger than his. You turn on the TV on any given Sunday, win the Superbowl and drive off in a Hyudai. She was supposed to buy your shorty Tyco with your money. Then she went to the doctor and got lipo with your money." -Lebron James on using protection`,
    `"A relationship without trust is like a phone without service. And what do you do with a phone that doesn't have service? Play games." -street poet and philosopher, Drake`,
    `"If you don't know where you are going, you might end up someplace else." -Yogi Berra`,
    `"Hello world, I'm with a yellow girl, number two pencil"  -Lil Wayne, James also`,
    `“Of all the trees we could have hit, we had to get the one that hits back.” -Ronald Weasley`,
    `"Third time's a charm."`,
    `"No." -Rosa Parks`,
    `“If a man is called to be a street sweeper, he should sweep streets even as a Michaelangelo painted, or Beethoven composed music or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, 'Here lived a great street sweeper who did his job well.” -Dr. Martin Luther King Jr.`,
    `"I got a Glock in my 'Rari" -Fetty Wap`,
    `"Baseball is 90% mental and the other half is physical" -Yogi Berra, on baseball and almost everything else in life`,
    `"There was no collusion. Everybody knows there was no collution." -Donald Trump after his former lawyer, Michael Cohen, was found guilty of 8 forms of fraud, a former campaign chairman, Paul Manafort, who was too found guilty of 8 forms of fraud, another former campaign chairman, George Papadapalous, was found guilty lying to FBI agents, a Dutch attorney, Alex van der Zwaan, who lied to the FBI for Manafort, former Trump advisor, Roger Stone, was caught tampering and lying to Congress, former Trump advisor, Rick Gates, guilty to conspiracy and lying to the FBI, and still awaiting sentencing, Michael Flynn, the former national security advisor that sold out our country`,
]

let anytimeGreetings = [
    "Yo",
    "Greetings",
    "Hello",
    "Salutations",
    "Sup",
    "Hola", 
    "Konnichiwa",
    "Kamusta",
    "WAZZAAAAAAP",
    "Blessings", 
    "Stay Classy",
    "Wash Your Hands",
];

let morningGreetings = [
    "Good Morning",
    "Wake Up",
    "Wakey Wakey",
    "Mornin'", 
    "You Survived The Night",
]

let afternoonGreetings = [
    "Good Afternoon",
    "It's Lunch Time", 
    "Grind Time", 
    "Walk Nutella",
]

let nightGreetings = [
    "Good Evening",
    "Good Night",
    "Go To Sleep",
    "Au Revoir",
    "G'night",
    "Night",
    "Turn Up", 
]

let nicknames = [
    "Che",
    "Lumba",
    "Future Optometrist",
    "Rachael Joy",
    "Nutella's Owner",
    "Che Che",
    "Forehead",
    "Elvin's Secretary",
    "1x FSA RGV Co-President",
    "Rachael",
];

let timebasedArray = [];
timebasedGreeting = () =>{
    let time = new Date().getHours();
    if (time >= 5 && time <= 11) {
        timebasedArray = anytimeGreetings.concat(morningGreetings);
    } else if (time >= 12 && time <= 19) {
        timebasedArray = anytimeGreetings.concat(afternoonGreetings);
    } else {
        timebasedArray = anytimeGreetings.concat(nightGreetings);
    }
    return timebasedArray;
}
// console.table(timebasedGreeting());

const greeting = document.querySelector(".statement");
randomGreeting = () => {
    greeting.textContent = timebasedGreeting()[Math.floor(Math.random() * timebasedGreeting().length)];
    greeting.textContent += ", " + nicknames[Math.floor(Math.random() * nicknames.length)];
}
randomGreeting();

// console.table(cheQuotes);

let launchDate = new Date();
launchDate.setFullYear(2020, 3, 24);
let today = new Date();
let dayDifference = today.getDate() - launchDate.getDate();

const quoteBox = document.querySelector(".quote");
todaysQuote = () => {
    quoteBox.textContent = cheQuotes[dayDifference];

    // for the day
    let time2 = new Date().getHours();
    if (time2 >= 10 && time2 <= 23) {
        let linebreak = document.createElement("br");
        let link = document.createElement("a");
        link.innerHTML = "Trainwreck link (might have pop-ups, welp)";
        const box = document.querySelector(".quote-box")
        box.appendChild(linebreak);
        box.appendChild(linebreak);
        link.href = "https://soap2day.is/movie_aTo1OTI7.html";
        box.appendChild(link);
    }
    
}
todaysQuote();

const quotesLeft = cheQuotes.length - dayDifference -1;
console.log("Quotes left: " + quotesLeft);