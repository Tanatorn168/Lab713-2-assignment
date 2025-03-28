// กำหนดโครงสร้างของหนังสือ
export interface Book {
    id: number;
    title: string;
    author_name: string;
    description: string;
    groups: string[];
}

// ข้อมูลหนังสือในห้องสมุด
export const books: Book[] = [
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

export function getAllBooks(): Promise<Book[]> {
    return getAllBooks()
  }
  
  export function getBookByTitle(title: string): Promise<Book | undefined> {
    return getBookByTitle(title)
  }
  
  export function getBookById(id: number): Promise<Book | undefined> {
    return getBookById(id)
  }
  
  export function addBook(newBook: Book): Promise<Book> {
    return addBook(newBook)
}