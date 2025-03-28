import type {Book} from "../models/books";
import connection from "../db";

export async function getAllBooks(): Promise<Book[]> {
  const [rows] = await connection.query("SELECT * FROM books");
  return rows as Book[];
}

export async function getBookById(id: number): Promise<Book | undefined> {
  const [rows] = await connection.query("SELECT * FROM books WHERE id = ?", [id]);
  const books = rows as Book[];
  return books.length > 0 ? books[0] : undefined;
}

export async function getBookByTitle(title: string): Promise<Book | undefined> {
  const [rows] = await connection.query("SELECT * FROM books WHERE title = ?", [title]);
  const books = rows as Book[];
  return books.length > 0 ? books[0] : undefined;
}

export async function addBook(newBook: Book): Promise<Book> {
  const {title, author_name, description, groups} = newBook;
  const [result] = await connection.query(
    "INSERT INTO books (title, author_name, description, groups) VALUES (?, ?, ?, ?)",
    [title, author_name, description, JSON.stringify(groups)]
    );

  newBook.id = (result as any).insertId;
  return newBook;
}


