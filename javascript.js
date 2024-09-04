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


function createAuthor(name, location, age){

}

// Question 1:
function createBook(title, published, genre, authorName){
    let author = authorList.find(n => n.name === authorName);
    let book = new Book(title, published, genre, author)
    authorList
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