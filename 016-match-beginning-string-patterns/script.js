// Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

// In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";

let notFirst = "You can't find Ricky now.";

let firstRegex = /^Ricky/;

console.log(firstRegex.test(firstString));

console.log(firstRegex.test(notFirst));

// The first test call would return true, while the second would return false.

// TASK

// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";

let calRegex = /^Cal/;

let result = calRegex.test(rickyAndCal);

console.log(result);
