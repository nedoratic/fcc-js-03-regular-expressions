// So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";

let ourRegex = /Repeat/;

console.log(testStr.match(ourRegex));

// Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;

console.log(testStr.match(repeatRegex));

// And here match returns the value ["Repeat", "Repeat", "Repeat"]

// TASK

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note: You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";

let starRegex = /twinkle/gi;

let result = twinkleStar.match(starRegex);

console.log(result);
