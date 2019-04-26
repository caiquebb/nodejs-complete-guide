const person = {
    name: 'Caique',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// person.greet();

// const copiedPerson = {...person};
// console.log(copiedPerson);

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
// for (let hobbby of hobbies) {
//     console.log(hobbby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programing');
// console.log(hobbies)

// const copiedArray = hobbies.slice();

// const copiedArray = [...hobbies];

// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4));
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);