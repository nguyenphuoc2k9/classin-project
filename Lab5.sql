--
-- File generated with SQLiteStudio v3.4.3 on Sat Apr 1 20:37:14 2023
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Customers
CREATE TABLE IF NOT EXISTS Customers(CustomerID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL NOT NULL,CustomerName VARCHAR(255),Address varchar(255),City varchar(255),Country varchar(255));
INSERT INTO Customers (CustomerID, CustomerName, Address, City, Country) VALUES (1, 'Alfreds Futterkiste', 'Obere Str. 57', 'Berlin', 'Germany');
INSERT INTO Customers (CustomerID, CustomerName, Address, City, Country) VALUES (2, 'Ana Trujillo Emparedados', 'Avda. de la Constitución 2222', 'México D.F.', 'Mexico');
INSERT INTO Customers (CustomerID, CustomerName, Address, City, Country) VALUES (3, 'Antonio Moreno Taquería', 'Mataderos 2312', 'México D.F.', 'Mexico');
INSERT INTO Customers (CustomerID, CustomerName, Address, City, Country) VALUES (4, 'Around the Horn', '120 Hanover Sq.', 'London', 'UK');

-- Table: OrderDetails
CREATE TABLE IF NOT EXISTS OrderDetails(OrderDetailID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,OrderID INTEGER,ProductID INTEGER, Quanity INTEGER);
INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quanity) VALUES (1, 10248, 1, 12);
INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quanity) VALUES (2, 10248, 3, 10);
INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quanity) VALUES (3, 10248, 2, 5);
INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quanity) VALUES (4, 10249, 4, 9);

-- Table: Orders
CREATE TABLE IF NOT EXISTS Orders(OrderID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,OrderDate Text,CustomerID INTEGER);
INSERT INTO Orders (OrderID, OrderDate, CustomerID) VALUES (10248, '7/4/1996', 2);
INSERT INTO Orders (OrderID, OrderDate, CustomerID) VALUES (10249, '7/5/1996', 3);
INSERT INTO Orders (OrderID, OrderDate, CustomerID) VALUES (10250, '7/8/1996', 3);
INSERT INTO Orders (OrderID, OrderDate, CustomerID) VALUES (10251, '7/8/1996', 5);

-- Table: Products
CREATE TABLE IF NOT EXISTS Products(ProductID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,ProductName VARCHAR(255),Category varchar(255),Unit varchar(255),Price varchar(255));
INSERT INTO Products (ProductID, ProductName, Category, Unit, Price) VALUES (1, 'Chais', 'Beverages', '10 boxes x 20 bags', '18');
INSERT INTO Products (ProductID, ProductName, Category, Unit, Price) VALUES (2, 'Chang', 'Beverages', '24 - 12 oz bottles', '19');
INSERT INTO Products (ProductID, ProductName, Category, Unit, Price) VALUES (3, 'Aniseed Syrup', 'Condiments', '12 - 550 ml bottles', '10');
INSERT INTO Products (ProductID, ProductName, Category, Unit, Price) VALUES (4, 'Chef Anton''s Cajun Seasoning', 'Condiments', '48 - 6 oz jars', '22');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
