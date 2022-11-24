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
