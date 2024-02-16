function sayMyName(){
    // console.log("M");
    // console.log("a");
    // console.log("y");
    // console.log("a");
    // console.log("n");
    // console.log("k");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("Result:", result);


function loginUserMessage(username = "Hemu"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mayank"))
// console.log(loginUserMessage("Mayank"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Mayank",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and proce is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "Hemu",
    price: 499
})


const myNewArray = [200, 400,  600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));