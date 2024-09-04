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

function changeBookDate(oldDate, newDate){
    let book = bookList.find(b => b.published === oldDate)
    book.published = newDate;
    return book;
}

//// Question 5:

function changeBookGenre(oldGenre, newGenre){
    let book = bookList.find(b => b.genre === oldGenre)
    book.genre = newGenre;
    return book;
}

//// Question 6:

function changeAuthorAge(authorName, newAge){
    if (newAge > 80 || newAge < 15){
        return "Invalid Age";
    }
    let author = authorList.find(a => a.name == authorName);
    author.age = newAge;
    return author;
}

//// Question 7:

let myLibrary = [];

//// Question 8:

function addBookToLibrary(bookTitle){
    let checker = myLibrary.find(b => b.name == bookTitle)
    if (checker != null){
        return "Book already exists in Library";
    }
    let book = bookList.find(b => b.title === bookTitle);
    myLibrary.push(book);
}

//// Question 9:

function stupidFunction() {
    // Create authors
    let author1 = createAuthor("George Orwell", "London", 46);
    let author2 = createAuthor("Jane Austen", "Hampshire", 41);
    let author3 = createAuthor("J.K. Rowling", "Edinburgh", 58);
    let author4 = createAuthor("Mark Twain", "Florida", 74);
    authorList.push(author1, author2, author3, author4);

    // Create books
    let book1 = createBook("1984", 1949, "Dystopian", "George Orwell");
    let book2 = createBook("Pride and Prejudice", 1813, "Romance", "Jane Austen");
    let book3 = createBook("Harry Potter and the Sorcerer's Stone", 1997, "Fantasy", "J.K. Rowling");
    let book4 = createBook("The Adventures of Tom Sawyer", 1876, "Adventure", "Mark Twain");
    bookList.push(book1, book2, book3, book4);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    addBookToLibrary(book4);
}