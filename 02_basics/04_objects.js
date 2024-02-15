// singleton
// Object.create


// const tinderuser = new Object()   // singleton objects
const tinderuser = {}    // non singleton objects

tinderuser.id = "123abc"
tinderuser.name = "Jerry"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "jerry@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "m@gamil.com"
    },
    {
        id: 1,
        email: "m@gamil.com"
    },
    {
        id: 1,
        email: "m@gamil.com"
    },
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Mayank" 
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "Mayank",
//     "coursename": "Js in hindi",
//     "price": "Free"
// }

[
    {},
    {},
    {}
]