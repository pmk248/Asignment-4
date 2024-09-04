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

//// Question 1:

// Creates Author, Adds author to authorlist:
function createAuthor(name, location, age){
    let author = new Author(name, location, age);
    authorList.push(author);
    return author;
}

// Creates Book, Finds author by name, Adds created book to booklist:
function createBook(title, published, genre, authorName){

    let author = authorList.find(a => a.name === authorName);
    let book = new Book(title, published, genre, author);
    bookList.push(book);
    return book;
}

//// Question 2:

function getDetails(bookTitle){
    let book = bookList.find(b => b.title === bookTitle);
    return {title: book.title,
            published: book.published,
            genre: book.genre,
            auhthor: {
                name: book.author.name,
                location: book.author.location,
                age: book.author.age
            },
    };
}

//// Question 3:

function changeBookName(oldTitle, newTitle){
    let book = bookList.find(b => b.title === oldTitle)
    book.name = newTitle;
    return book;
}

//// Question 4:

function changeBookName(oldDate, newDate){
    let book = bookList.find(b => b.published === oldDate)
    book.published = newDate;
    return book;
}
