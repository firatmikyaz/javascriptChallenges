/* // Coding Challenges #1
console.log('----------  Coding Challenges #1');

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

//Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

//Data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/* // Coding Challenges #2
// I copied my calculations from Challenge #1 for this challenge here.

//Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

//Data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

//Control BMI value of Mark and John
console.log(BMIMark, BMIJohn);

if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!"`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!"`);
}
*/

// Coding Challenges #2

// Data 1
const avegareDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

// Bonus 1
// const avegareDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;

// Bonus 2
// const avegareDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 106) / 3;

console.log('---------- Task 1');
console.log(
    `Dolphins Avegare: ${avegareDolphins}, Koalas Average: ${averageKoalas}`,
);

console.log('---------- Task 2');
if (avegareDolphins > averageKoalas) {
    console.log('Dolphins win the trophy 🏆');
} else if (avegareDolphins < averageKoalas) {
    console.log('Koalas win the trophy 🏆');
} else {
    console.log('Both win the thorpy 🏆');
}

console.log('---------- Bonus 1');
if (avegareDolphins > averageKoalas && avegareDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (avegareDolphins < averageKoalas && averageKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else {
    console.log('Both win the thorpy 🏆');
}

console.log('---------- Bonus 2');
if (avegareDolphins > averageKoalas && avegareDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (avegareDolphins < averageKoalas && averageKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (
    avegareDolphins === averageKoalas &&
    avegareDolphins >= 100 &&
    averageKoalas >= 100
) {
    console.log('Both win the thorpy 🏆');
} else {
    console.log('No one wins the thorpy 😭');
}
