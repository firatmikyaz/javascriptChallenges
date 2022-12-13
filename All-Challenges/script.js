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

/*
// Coding Challenges #3

// Data 1
// const avegareDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

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
*/

/*
// Coding Challenges #4

// Data 1
// Test for bill values 275, 40 and 430
console.log('---------- Task 1');
const tip = 500;

////// Solution with if-else statement
// if (tip >= 50 && tip <= 300) {
//     console.log(
//         `The bill was ${tip}, the tip was ${tip * 0.15}, and the total value ${
//             tip + tip * 0.15
//         }`,
//     );
// } else if (tip > 300) {
//     console.log(
//         `The bill was ${tip}, the tip was ${tip * 0.2}, and the total value ${
//             tip + tip * 0.2
//         }`,
//     );
// }

console.log(
    tip >= 50 && tip <= 300
        ? `The bill was ${tip}, the tip was ${
              tip * 0.15
          }, and the total value ${tip + tip * 0.15}`
        : `The bill was ${tip}, the tip was ${tip * 0.2}, and the total value ${
              tip + tip * 0.2
          }`,
);
*/

/*
// Coding Challenges #5


// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


const calcAverage = (p1, p2, p3) => (p1 + p2 + p3) / 3;

// Data 1
// const averageDolphins = calcAverage(44, 23, 71); // 46
// const averageKoalas = calcAverage(65, 54, 49); // 56

// Data 2
const averageDolphins = calcAverage(85, 54, 71); // 70
const averageKoalas = calcAverage(23, 34, 27); // 28
//console.log(averageDolphins, averageKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`no team wins! 😭`);
    }
};

checkWinner(averageDolphins, averageKoalas);
*/

/*
// Coding Challenges #6

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44]; // Create bills array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; // create tips array, in call calcTip method
// console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

// Coding Challenges #7
//BMI calculate : BMI = mass / height ** 2

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

console.log(
    mark.calcBMI() > john.calcBMI()
        ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
        : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`,
);
