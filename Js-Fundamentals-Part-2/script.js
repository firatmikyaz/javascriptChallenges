//// LECTURE: Functions
console.log('**LECTURE: Functions**');

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its
capital city is ${capitalCity}`;
}

const describeFinland = describeCountry('Finland', 6, 'Helsinki');
const describeTurkey = describeCountry('Turkey', 80, 'Ankara');
const describeEngland = describeCountry('England', 67, 'London');
console.log(`${describeFinland},
${describeTurkey},
${describeEngland}`);

//// LECTURE: Function Declarations vs. Expressions
console.log('**LECTURE: Function Declarations vs. Expressions**');

//Function Decleration
function percentageOfWorld1(population) {
    population = ((population / 7900) * 100).toFixed(1);
    return `${population}%`;
}
//Function Expression
const percentageOfWorld2 = function (population) {
    population = ((population / 7900) * 100).toFixed(1);
    return `${population}%`;
};

const popFinland = percentageOfWorld1(6);
const popTurkey = percentageOfWorld1(80);
const popEngland = percentageOfWorld1(67);
const popChina = percentageOfWorld2(1441);

console.log(
    `Finland: ${popFinland}, Turkey: ${popTurkey}, England: ${popEngland} and China: ${popChina}`,
);

//// LECTURE: Arrow Function
console.log('**LECTURE: Arrow Function**');

// Arrow Function
const percentageOfWorld3 = (population) => {
    population = ((population / 7900) * 100).toFixed(1);
    return `${population}%`;
};

const popChina1 = percentageOfWorld2(1441);
console.log(`China: ${popChina}`);

//// LECTURE: Functions Calling Other Functions
console.log('**LECTURE: Functions Calling Other Functions**');

const percentageOfWorld = function (population) {
    population = ((population / 7900) * 100).toFixed(1);
    return `${population}%`;
};

function describePopulation(country, population) {
    const percentWorld = percentageOfWorld2(population);
    return `${country} has ${population} million people, which is about ${percentWorld} of the world.`;
}

const popGermany = describePopulation('Germany', 67);
const popBrazil = describePopulation('Brazil', 214);
const popNetherlands = describePopulation('Netherlands', 67);
console.log(
    `${popGermany},
    ${popBrazil},
    ${popNetherlands}`,
);

//// LECTURE: Introduction to Arrays
console.log('**LECTURE: Introduction to Arrays**');

// const populations = [6, 80, 1441, 214];
// console.log(populations.length > 0);

const percentages = [
    percentageOfWorld(6),
    percentageOfWorld(80),
    percentageOfWorld(1441),
    percentageOfWorld(214),
];
// console.log(percentages);

//// LECTURE: Basic Array Operations (Methods)
console.log('**LECTURE: Basic Array Operations (Methods)**');

const neighbours = ['Greece', 'Bulgaria', 'Azerbaijan', 'Georgia'];

//Add element
neighbours.push('Utopia');
console.log(neighbours);

//Delete element
neighbours.pop();
console.log(neighbours);

//Search element
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

//Search element and change name
console.log(neighbours.indexOf('Azerbaijan'));
neighbours[2] = 'Republic of Azerbaijan';
console.log(neighbours);

//// LECTURE: Introduction to Objects
console.log('**LECTURE: Introduction to Objects**');

const myCountry = {
    country: 'Turkey',
    capital: 'Ankara',
    language: 'turkish',
    population: 80,
    neighbours: ['Greece', 'Bulgaria', 'Azerbaijan', 'Georgia'],
};
console.log(myCountry);

//// LECTURE: Dot vs. Bracket Notation
console.log('**LECTURE: Dot vs. Bracket Notation**');

console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

//// LECTURE: Object Methods
console.log('**LECTURE: Object Methods**');

const myCountryCopy = {
    country: 'Turkey',
    capital: 'Ankara',
    language: 'turkish',
    population: 80,
    neighbours: ['Greece', 'Bulgaria', 'Azerbaijan', 'Georgia'],

    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`,
        );
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    },
};

myCountryCopy.describe();
myCountryCopy.checkIsland();

//// LECTURE: Iteration: The for Loop
console.log('**LECTURE: Iteration: The for Loop**');

// 50 seçmen için yazılacak olan for loop ifasesi
// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// Console ekranında daha az yer kaplaması için sadece 3 seçmen kullanacağım.
for (let i = 1; i <= 3; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//// LECTURE: Looping Arrays, Breaking and Continuing
console.log('**LECTURE: Looping Arrays, Breaking and Continuing**');

const populations = [6, 80, 1441, 214];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    //console.log(populations[i]);
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

const newArr = percentages2.filter((element) => percentages.includes(element));

if (percentages2.length === percentages.length) {
    console.log(`${newArr} same values`);
}
