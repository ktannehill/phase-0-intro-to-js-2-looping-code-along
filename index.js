// // Code your solutions in this file

// /* for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }; */

// /* const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         // debugger;
//     }
// }

// wrapGifts(gifts); */

// // Thank you card creator

// // const name = ["Charlie", "Samip", "Ali"];
// // 1. create a new, empty array to hold the messages;
// // 2. iterate through the input array and, inside the loop
// // build out the 'thank you' message for each name using string interpolation
// // then add that message to the new array you created;
// // 3. after the loop finishes and all of the messages have been added to the new array, return the new array.

// function writeCards(name, event) {

//     let card = [];

//     for (let i = 0; i < name.length; i++) {
//         card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
//     };

//     return card;
    
// };

// console.log(writeCards(["bob", "billy", "jolene"], "ho-down"));

// // countDown function
// // takes in any positive integer and
// // starting from that number, counts down to zero using console.log()

// function countDown(int) {

//     while (int > -1) {
//         console.log(int)
//         int -= 1;
//     };
// };

// countDown(10);



// phase-1, take 2

// for(let age = 30; age <40; age++) {
//     console.log(`I'm ${age} years old, happy birthday to me!`)
// }

const gifts = ['teddy bear', 'drone', 'doll']

const wrapGifts = function(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
}

wrapGifts(gifts)

const wrapGiftsWhile = function(gifts) {
    let i = 0
    while(i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        i++
    }
    return gifts
}

const writeCards = function(array, event) {
    let thankYou = []
    for(let i = 0; i < array.length; i++) {
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
        thankYou.push(message)
    }
    return thankYou
};

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

const countDown = function(num) {
    for(let i = num; i >=0; i--) {
        console.log(i)
    }
}

countDown(10)