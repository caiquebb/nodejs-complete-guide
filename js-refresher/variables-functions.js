const name = 'Caique';
let age = 33;
const hasHobbies = true;

age = 34;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobbies
    );
}

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(add(1,2));
console.log(addOne(1));
console.log(addRandom(1));

console.log(summarizeUser(name, age, hasHobbies));