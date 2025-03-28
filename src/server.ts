// filepath: c:\Users\CAMT-STD\Desktop\Tanatorn_672132168\953713\Lab713-2-assignment\src\server.ts
import express from 'express';

const app = express();
const port = 3000;

// ข้อมูลหนังสือในห้องสมุด
const books = [
    {
        id: 1,
        title: "The Pragmatic Programmer",
        author_name: "Andrew Hunt, David Thomas",
        description: "A must-read book for software developers.",
        groups: ["Software Development", "Programming"]
    },
    {
        id: 2,
        title: "Clean Code",
        author_name: "Robert C. Martin",
        description: "A handbook of agile software craftsmanship.",
        groups: ["Software Engineering", "Best Practices"]
    },
    {
        id: 3,
        title: "Design Patterns",
        author_name: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        description: "Elements of reusable object-oriented software.",
        groups: ["Software Architecture", "OOP"]
    },
    {
        id: 4,
        title: "Refactoring",
        author_name: "Martin Fowler",
        description: "Improving the design of existing code.",
        groups: ["Software Engineering", "Refactoring"]
    },
    {
        id: 5,
        title: "You Don't Know JS",
        author_name: "Kyle Simpson",
        description: "A book series on JavaScript.",
        groups: ["JavaScript", "Programming"]
    },
    {
        id: 6,
        title: "Introduction to Algorithms",
        author_name: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
        description: "A comprehensive textbook on algorithms.",
        groups: ["Algorithms", "Computer Science"]
    },
    {
        id: 7,
        title: "The Mythical Man-Month",
        author_name: "Frederick P. Brooks Jr.",
        description: "Essays on software engineering.",
        groups: ["Software Engineering", "Project Management"]
    },
    {
        id: 8,
        title: "Code Complete",
        author_name: "Steve McConnell",
        description: "A practical handbook of software construction.",
        groups: ["Software Development", "Best Practices"]
    }
];

// Endpoint เพื่อคืนค่าหนังสือทั้งหมด
app.get("/books", (req, res) => {
    if (req.query.title) {
        const title = req.query.title;
        const filteredBooks = books.filter((book) => book.title === title);
        res.json(filteredBooks);
    }
    else {
        res.json(books);
    }
});

//Endpoint เพื่อคืนค่าหนังสือตาม ID
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((book) => book.id === id);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).send("Book not found");
    }
});

// Endpoint เพื่อคืนค่าหนังสือตามชื่อ
app.get("/books/title/:title", (req, res) => {
    const title = req.params.title;
    const filteredBooks = books.filter((book) => book.title === title);
    if (filteredBooks.length > 0) {
        res.json(filteredBooks);
    }
    else {
        res.status(404).send("Book not found");
    }
}
);

// Endpoint เพื่อเพิ่มหนังสือใหม่
app.post("/books", express.json(), (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

function getAllBooks() {
    return books;
}

function getBooksById(id: number) {
    return books.find((book =>book.id === id));
}

function getBooksByTitle(title: string) {
    return books.filter((book) => book.title === title);
}

function addBook(newBook: { id: number; title: string; author_name: string; description: string; groups: string[] }) {
    books.push(newBook);
    return newBook;
}