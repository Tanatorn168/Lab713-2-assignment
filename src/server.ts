// filepath: c:\Users\CAMT-STD\Desktop\Tanatorn_672132168\953713\Lab713-2-assignment\src\server.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// ข้อมูลหนังสือในห้องสมุด
const books = [
    {
        title: "The Pragmatic Programmer",
        author_name: "Andrew Hunt, David Thomas",
        description: "A must-read book for software developers.",
        groups: ["Software Development", "Programming"]
    },
    {
        title: "Clean Code",
        author_name: "Robert C. Martin",
        description: "A handbook of agile software craftsmanship.",
        groups: ["Software Engineering", "Best Practices"]
    },
    {
        title: "Design Patterns",
        author_name: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        description: "Elements of reusable object-oriented software.",
        groups: ["Software Architecture", "OOP"]
    },
    {
        title: "Refactoring",
        author_name: "Martin Fowler",
        description: "Improving the design of existing code.",
        groups: ["Software Engineering", "Refactoring"]
    },
    {
        title: "You Don't Know JS",
        author_name: "Kyle Simpson",
        description: "A book series on JavaScript.",
        groups: ["JavaScript", "Programming"]
    },
    {
        title: "Introduction to Algorithms",
        author_name: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
        description: "A comprehensive textbook on algorithms.",
        groups: ["Algorithms", "Computer Science"]
    },
    {
        title: "The Mythical Man-Month",
        author_name: "Frederick P. Brooks Jr.",
        description: "Essays on software engineering.",
        groups: ["Software Engineering", "Project Management"]
    },
    {
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

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});