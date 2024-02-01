// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); 

// const bigNumber = 3254145332154

// Return

// undefined --> undefined
// null --> object
// String --> string
// Symbol --> symbol
// Boolean --> boolean
// Number --> number
// BigInt --> bigint




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Mayank",
    age: 19
}

const myFunction = function(){
    console.log("Hello World");
}

// Return

// Arrays --> object
// objects --> object
// Functions --> object function

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non-Primitive)

let myYoutubename = "mayankydvdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mayank@google.com"

console.log(userOne.email);
console.log(userTwo.email);