let players = ["Rooney", "Scholes", "Berbatov"];
let players2 = ["Fletcher", "Neville", "Evra"];
// push()...adds to the end...changes the original array
// players.push("Giggs");
// console.log(players);

// // pop()...delete from end and returns the item..changes the original array

// let deletedVal = players.pop();
// console.log(players, deletedVal);

// // toString()...converts array to a string...doesn't change the original array

// console.log(players.toString());

// concat...joins multiple arrays & returns result...doesn't change original array
let allPlayers = players.concat(players2);
console.log(allPlayers);

// unshift...adds to the start...changes orignal array
players.unshift("Carrick");
console.log(players);

// shift...deletes from the start...changes orignal array
players2.shift();
console.log(players2);

// slice...returns piece of array...doesn't change original array
let somePlayers = allPlayers.slice(2, 5); //(start index, end index)...end index is non inclusive
console.log(somePlayers);

// splice...changes original array...splice(startidx, delCount, newEl1, newEl2, newEln...)
let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 101, 102);
// console.log(arr);

// add element through splice
arr.splice(2, 0, 101);
console.log(arr);
