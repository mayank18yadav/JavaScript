// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and Inner loop ${i} `);
    // console.log(i + '*' + j + ' = ' + i*j );
    }
}

let myArray = ["Mayank", "Manjeet", "Viraj"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`5 is Detected`);
        break
    }
    // console.log(`Value of i is ${index}`);    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 is Detected`);
        continue
    }
    console.log(`Value of i is ${index}`);    
}