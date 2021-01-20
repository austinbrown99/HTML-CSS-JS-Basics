// Prints 'Hello World' into the console
console.log('Hello World');

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number
//Cannot contain a space or hyphen
//Are case-sensitive
let name = 'Mosh';
console.log(name);

//Const makes variables constant
const interestRate = 0.3;
console.log(interestRate)

name = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean True
//let firstName = undifined;
let selectedColor = null;

let person = {
    name: 'Mosh',
    age: '30'    
};
person.name = 'John'
console.log(person)
console.log(person.name)

let selectedColors = ['red', 'blue']
selectedColors[2] = 'green';
console.log(selectedColors)
console.log(selectedColors[1])

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Austin');
greet('Mary', 'Anthony')

function square(number) {
    return number * number;
}
console.log(square(2));

alert("Test")