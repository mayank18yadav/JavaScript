// Objects Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Mayank",
    "full name": "Mayank Yadav",
    [mySym]: "mykey1",
    age: 19,
    location: "Haryana",
    email: "mayank@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mayank@yadav.com"
// Object.freeze(JsUser)
JsUser.email = "mayank@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());