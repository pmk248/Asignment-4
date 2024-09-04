class Book {
    constructor(title, published, genre, author) {
        this.title = title;
        this.published = published;
        this.genre = genre;
        this.author = author;
    }
}

class Author{
    constructor(name, location, age){
        this.name = name;
        this.location = location;
        this.age = age;
    }
}

const authorList = [];
const bookList = [];

// Creates Author, Adds author to authorlist:
function createAuthor(name, location, age){
    let author = new Author(name, location, age);
    authorList.push(author);
    return author;
}

// Creates Book, Finds author by name, Adds created book to booklist:
function createBook(title, published, genre, authorName){

    let author = authorList.find(n => n.name === authorName);
    let book = new Book(title, published, genre, author);
    bookList.push(book);
    return book;
}











const book = {
    title: "",
    published: new Date(""),
    genre: "",
    author: {
        firstName: "",
        lastName: "",
        age: 0
    },    
};