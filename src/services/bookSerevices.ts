import type { Book } from "../models/books"
import * as repo from "../repository/booksRepository"

export function getBookByTitle(title: string): Promise<Book | undefined> {
    return repo.getBookByTitle(title);
  }
  
export function getAllBooks(): Promise<Book[]> {
    return repo.getAllBooks();
  }
  
export function getBookById(id: number): Promise<Book | undefined> {
    return repo.getBookById(id);
  }
  
export function addBook(newBook: Book): Promise<Book> {
    return repo.addBook(newBook);
  }