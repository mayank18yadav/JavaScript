// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 1, 14) 
// let myCreatedDate = new Date(2024, 1, 14, 12, 5) 
// let myCreatedDate = new Date("2024-02-14") 
let myCreatedDate = new Date("02-14-2024") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default', {
    weekday: "long",
})