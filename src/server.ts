import express from 'express';
import { getAllBooks, getBookByTitle, getBookById, addBook } from './repository/booksRepository';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint เพื่อคืนค่าหนังสือทั้งหมด
app.get("/books", async (req, res) => {
    const title = req.query.title as string | undefined;

    if (title) {
        const book = await getBookByTitle(title);
        if (book) {
            res.json(book);
        } else {
            res.status(404).send("Book not found");
        }
    } else {
        const books = await getAllBooks();
        res.json(books);
    }
});

// Endpoint เพื่อคืนค่าหนังสือตาม ID
app.get("/books/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const book = await getBookById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

// Endpoint เพื่อเพิ่มหนังสือใหม่
app.post("/books", async (req, res) => {
    const newBook = req.body;
    const addedBook = await addBook(newBook);
    res.status(201).json(addedBook);
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});