--
-- File generated with SQLiteStudio v3.4.3 on Sat Apr 1 20:43:19 2023
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: students_info
CREATE TABLE IF NOT EXISTS students_info(id PK int, first_name varchar(50),last_name varchar(50),age int);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (1, 'duong', 'tran minh', 16);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (2, 'hong ha', 'nguyen', 20);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (3, 'cuong', 'nguyen van', 20);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (4, 'hung', 'nguyen dang', 15);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (5, 'huong', 'thao dan', 22);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (6, 'hien', 'nguyen thi', 15);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (7, 'quan', 'hoang', 10);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (8, 'ngoc', 'vu', 8);
INSERT INTO students_info (id, first_name, last_name, age) VALUES (9, 'viet anh', 'dinh', 18);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
