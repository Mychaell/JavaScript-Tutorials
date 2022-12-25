class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        return `${this.title} is ${years} year old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
}

//Instantiate Object

const book1 = new Book('Book One', 'Monk Mike', '2012');

console.log(book1);
book1.revise('2019');
console.log(book1);