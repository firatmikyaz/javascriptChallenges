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

const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description1);

//// LECTURE: Strings and Template Literals
console.log('**LECTURE: Strings and Template Literals**');

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language};`;
console.log(description2);

//// LECTURE: Taking Decisions: if / else Statements
console.log('**LECTURE: Taking Decisions: if / else Statements**');

// population = 13, else block works
// population = 130, if block works

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million below average`,
    );
}

//// LECTURE: Type Conversion and Coercion
console.log('**LECTURE: Type Conversion and Coercion**');

// My guess
// '9' - '5';  --> 4
// '19' - '13' + '17';  --> 617 = 6 + '17'
// '19' - '13' + 17;  --> 23 = 6 + 17
// '123' < 57;  --> false
// 5 + 6 + '4' + 9 - 4 - 2; --> 1143 = 11 + '4' + 3

// Result
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
