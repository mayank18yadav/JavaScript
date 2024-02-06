const fav_cars = ["Rubicon", "Gwegon", "Fortuner"]
const sp_cars = ["Porsche", "Lambo", "Vertus"]

// fav_cars.push(sp_cars)

// console.log(fav_cars);
// console.log(fav_cars[3] [1]);

// const allCars = fav_cars.concat(sp_cars)
// console.log(allCars);

const all_new_cars = [ ...fav_cars, ...sp_cars]

// console.log(all_new_cars);

const another_array = [1, 2, 3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("Mayank"))
console.log(Array.from("Mayank"))
console.log(Array.from({name: "Mayank"})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));