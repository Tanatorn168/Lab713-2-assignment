import express from 'express';
import { getAllBooks, getBookByTitle, getBookById, addBook } from './repository/booksRepository';
import multer from 'multer';
import { uploadFile } from './services/uploadFileService';

const app = express();
const port = 3000;

app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
      try {
        const file = req.file;
        if (!file) {
          return res.status(400).send('No file uploaded.');
        }
    
        const bucket = 'images';
        const filePath = `uploads/${file.originalname}`;
     
        await uploadFile(bucket, filePath, file);
    
        res.status(200).send('File uploaded successfully.');
      } catch (error) {
        res.status(500).send('Error uploading file.');
      }
    });

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