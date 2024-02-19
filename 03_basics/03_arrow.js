const user = {
    username: "Mayank",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "Hemu"
// user.welcomemessage()

// console.log(this);


// function chai(){
//     let username = "Mayank"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Mayank"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "Mayank"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Mayank"})


console.log(addTwo(3, 4));