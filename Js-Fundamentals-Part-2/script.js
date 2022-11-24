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
