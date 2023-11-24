// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";

let gPhrase = "gut feeling";

let oPhrase = "over the moon";

let goRegex = /go*/;

console.log(soccerWord.match(goRegex));

console.log(gPhrase.match(goRegex));

console.log(oPhrase.match(goRegex));

// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

// TASK

// For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

let chewieQuote = "He made a fair move. Screaming about it can't help you.";

let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex);