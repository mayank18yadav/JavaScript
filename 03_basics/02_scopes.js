// var c = 300
let a = 300                           // outside if statement global scope

if (true) {
    let a = 10
    const b = 20                      // inside if statement block scope
    // console.log("INNER: ", a)
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Mayank"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()


if (true) {
    const username = "Mayank"
    if (username == "Mayank") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)


// +++++++++++++++++++  INTERESTING  ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num) {
    return num + 2
}


