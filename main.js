/*const todos = [
    {
        id: 1,
        text: 'take out the trash',
        isCOmpleted: true

    },
    {
        id: 2,
        text: 'meeting with boss',
        isCOmpleted: true

    },
    {
        id: 3,
        text: 'dentist apt',
        isCOmpleted: false

    },];*/

    // console.log(todos[1].text);
// For loop

/*for(todo of todos) {
    console.log(todo.text);
};*/

//while loop

/*let i = 0;
while(i<10) {
    console.log(`While loop Number: ${i}`);
    i++;
};*/

//forEach, map, filter

/*const todoCompelted = todos.filter(function(todo) {
    return todo.isCOmpleted == true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompelted);*/

/*const x = 7;
const y = 11;

if (x > 5 && y >10) {
    console.log('x is more than 5 or y is more than 10');
}*/

//Itenary operator
/*const x = 9;

const color = x > 10 ? 'red' : 'blue'

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('color is NOT red or blue');
            break;
}*/

/*const addNum = num1 => num1 + 6

console.log(addNum(2));*/

//OOP using constructor function


/*function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = new Date(dob);
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
//Instantiate object

const person1 = new Person('Mike', 'Effiong', '05-10-1999');
console.log(person1.getBirthYear());
console.log(person1.getFullName());*/

/*class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Mike', 'Effiong', '05-10-1999');
const person2 = new Person('Frank', 'Gabriel', '05-11-1997');
console.log(person1.getBirthYear());
console.log(person1.getFullName());*/

//OOP JavaScript

// const s1 = 'Hello';

// console.log(typeof s1);

// const s2 = new String('hello');

//Object Literal

const book1 = {
    title: 'Book One',
    author: 'Michael',
    year: '2022',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Grace',
    year: '2021',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book2.getSummary());