// if

// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40) {
//     console.log("Less than 50");
// }
// else {
//     console.log("Temperature is greater than 50");
// }

// console.log("Executed");

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     let power = "Fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");         // not a good practice

// if (balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromemail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromemail) {
    console.log("user logged in");
}