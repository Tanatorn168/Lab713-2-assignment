-- สร้างตาราง books
CREATE TABLE books (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    groups TEXT NOT NULL -- เก็บกลุ่มเป็นข้อความที่คั่นด้วยเครื่องหมายจุลภาค
);
