// filepath: c:\Users\CAMT-STD\Desktop\Tanatorn_672132168\953713\Lab713-2-assignment\src\server.ts
import express, { Request, Response } from "express";

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
    }
];

// Endpoint เพื่อคืนค่าหนังสือทั้งหมด
app.get("/books", (req: Request, res: Response) => {
    res.json(books);
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});