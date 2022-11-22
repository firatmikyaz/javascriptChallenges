//// LECTURE: Values and Variables
console.log('**LECTURE: Values and Variables**');

// let country = 'moonlight';
// let continent = 'Europa';
let population = 22;
// console.log(country); // moonlight
// console.log(continent); // Europa
// console.log(population); // 21

//// LECTURE: Data Types
console.log('**LECTURE: Data Types**');

// const isIsland = true;
let language;
// console.log(typeof country); // string
// console.log(typeof population); // number
// console.log(typeof isIsland); // boolean
// console.log(typeof language); // undefined

//// LECTURE: let, const and var
console.log('**LECTURE: let, const and var**');

language = 'moonlightse';
const country = 'moonlight';
const continent = 'Europa';
const isIsland = false;
// isIsland = true; // We get the error: 'Uncaught TypeError: Assignment to constant variable'

//// LECTURE: Basic Operators
console.log('**LECTURE: Basic Operators**');

let halfPopulation = population / 2;
console.log(halfPopulation); // 11 = 22 / 1
population++;
console.log(population); // 23 = 22 + 1

console.log(population > 6); // true = 22 > 6
console.log(population < 33); // true = 22 < 33

const description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description);
