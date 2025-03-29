import express, { Request, Response } from "express";
import {
  getAllBooks,
  getBookByTitle,
  getBookById,
  addBook,
} from "../services/bookSerevices";
import type { Book } from "../models/books";
import exp from "constants";
const router = express.Router();

router.get("/", async(req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = await getBookByTitle(category as string);
    res.json(filteredEvents);
  } else {
    res.json(await getAllBooks());
  }
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const book = await getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

router.post("/", async (req, res) => {
  const newBook: Book = req.body;
  await addBook(newBook);
  res.json(newBook);
});

export default router;
