// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";

let batStr = "bat";

let matStr = "mat";

let bgRegex = /[a-e]at/;

console.log(catStr.match(bgRegex));

console.log(batStr.match(bgRegex));

console.log(matStr.match(bgRegex));

// In order, the three match calls would return the values ["cat"], ["bat"], and null.

// TASK

// Match all the letters in the string quoteSample.

// Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";

let alphabetRegex = /[a-z]/gi;

let result = quoteSample.match(alphabetRegex);

console.log(result);
