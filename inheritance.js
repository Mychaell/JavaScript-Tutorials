//Constructor

function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}


function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

//Instantiate Magazine object

const mag1 = new Magazine('Mag one', 'Monk Mike', '2015', 'May');

console.log(mag1);