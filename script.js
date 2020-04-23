let quotesArr = [
    `“Productivity is being able to do things that you were never able to do before.” ~ Franz Kafka`,
    `“Life is too complicated not to be orderly.” ~ Martha Stewart`, 
    `“While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior.” —Henry Link`,
    `“The winners in life think constantly in terms of I can, I will, and I am. Losers, on the other hand, concentrate their waking thoughts on what they should have or would have done, or what they can’t do.” ~ Dennis Waitley`,
    `“You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.” —Tina Fey`,
    `“Amateurs sit and wait for inspiration, the rest of us just get up and go to work.” ~ Stephen King`,
    `“It always seems impossible until it’s done.” —Nelson Mandela`,
    `Push yourself, because no one else is going to do it for you.`,
    `Sometimes later becomes never. Do it now.`,
    `“Your mind is for having ideas, not holding them.” —David Allen`,
    `“If you spend too much time thinking about a thing, you’ll never get it done.” ~ Bruce Lee`,
    `“Absorb what is useful, reject what is useless, add what is specifically your own.” ~ Bruce Lee`,
    `“I feel that luck is preparation meeting opportunity.” ~ Oprah Winfrey`,
    `Great things never come from comfort zones.`,
    `“By failing to prepare, you are preparing to fail.” ~ Benjamin Franklin`,
    `“It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.” ~ Charles Darwin`,
    `“My goal is no longer to get more done, but rather to have less to do.” ~ Francine Jay`,
    `“You see, in life, lots of people know what to do, but few people actually do what they know. Knowing is not enough! You must take action.” —Tony Robbins`,
    `“Live daringly, boldly, fearlessly. Taste the relish to be found in competition – in having put forth the best within you.” ~ Henry J. Kaiser`,
    `Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible. – Francis Of Assisi`,
    `The way to get started is to quit talking and begin doing. – Walt Disney`,
    `It’s not that I’m so smart, it’s just that I stay with problems longer. – Albert Einstein`,
    `Sometimes, things may not go your way, but the effort should be there every single night. – Michael Jordan`,
    `“If passion drives you, let reason hold the reins.”– Benjamin Franklin`,
    `“The greater the obstacle, the more glory in overcoming it.”– Jean-Baptiste Poqeulin (Moliere)`,
    `“You miss 100% of the shots you don’t take.”– Wayne Gretzky`,
    `“Procrastination is opportunity’s assassin.” —Victor Kiam`,
    `"I am Beyonce always"`,
    `"When you come to a fork in the road, take it" -Yogi Berra`,
    `"Third time's a charm."`
];

let cheQuotes = [
    `"Hello world, I'm with a yellow girl, number two pencil"  -Lil Wayne, James also`,
    `"Third time's a charm."`,
    `"No." -Rosa Parks`,
    `"I got a Glock in my 'Rari" -Fetty Wap`,
    `"If you don't know where you are going, you might end up someplace else." -Yogi Berra`,
    `"Baseball is 90% mental and the other half is physical" -Yogi Berra, baseball and almost everything else in life`,
    
]

let anytimeGreetings = [
    "Yo",
    "Greetings",
    "Hello",
    "Salutations",
    "Sup",
    "Howdy",
    "Bonjour",
    "Hola", 
    "Konnichiwa",
    "Kamusta",
    "WAZZAAAAAAP",
    "Que Onda"
];

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
    "Rachael"
];

const greeting = document.querySelector(".statement");
randomGreeting = () => {
    greeting.textContent = anytimeGreetings[Math.floor(Math.random() * anytimeGreetings.length)];
    greeting.textContent += ", " + nicknames[Math.floor(Math.random() * nicknames.length)];
}
randomGreeting();