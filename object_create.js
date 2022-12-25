//Oblject
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    
    },
    getAge: function() {
        return `${this.title} is ${years} year old`;
    }
}

//Create Object

const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'Monk Mike';
book1.year = '2020';

console.log(book1);
 