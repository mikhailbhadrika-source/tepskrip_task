/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    isbn: string;
    title: string;
    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
};

const book1: Book = {
    isbn: "978-602-03-1234-5",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    totalPages: 529,
    category: "Fiction",
    isAvailable: true
};

const book2: Book = {
    isbn: "978-602-06-5678-9",
    title: "Bumi",
    author: "Tere Liye",
    totalPages: 440,
    category: "Fantasy",
    isAvailable: true
};

const book3: Book = {
    isbn: "978-602-04-9876-1",
    title: "Atomic Habits",
    author: "James Clear",
    totalPages: 320,
    category: "Self-Development",
    isAvailable: false
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
