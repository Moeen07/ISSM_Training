// let str = "Manchester";
// console.log(str.length);
// console.log(str[3]);

// // Template Literals
// let port = 2000;
// const webName = "Arkand";
// console.log(`Server running at ${port} for the website called ${webName}`);

// // Escape Characters
// console.log("This is first line \nThis is second line");
// console.log("This is a sentence \tand now a tab space is added");

// Methods....They won't change the original string, always returns a new value, you can store it if you want
// Strings in JS are 'IMMUTABLE'

// let smallStr = "abc";
// console.log(smallStr.toUpperCase());

// // Trim...removes whitespaces from start and end(not the ones in between)
// let spacedString = "   Back To Karkand ";
// console.log(spacedString);
// console.log(spacedString.trim());

// // slice....slice(start,end) where end is non-inclusive...it is also optional, in case left empty, will go till end
// let bigString = "ABCDEFGH";
// console.log(bigString.slice(1, 4));

// // concat...we can also use + to concat strings
// let str1 = "Manchester";
// let str2 = "United";
// let club = str1.concat(str2);
// console.log(club);

// Replace...repace(find,replaceWith)...replaces the first instance it gets, replaceAll replaces all instances
let team = "Manchester City";
team = team.replace("City", "United");
console.log(team);

// Character At...returns the character at any given index
let check = "Glass";
console.log(check.charAt(2));
