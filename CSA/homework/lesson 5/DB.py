import sqlite3
c=  sqlite3.connect("Northwind.db")
c.execute("DROP TABLE IF EXISTS Customers")
c.execute("DROP TABLE IF EXISTS Products")
c.execute("DROP TABLE IF EXISTS Orders")
c.execute("DROP TABLE IF EXISTS OrderDetails")
c.execute("CREATE TABLE Customers(CustomerID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL NOT NULL,CustomerName VARCHAR(255),Address varchar(255),City varchar(255),Country varchar(255))")
c.execute("CREATE TABLE Products(ProductID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,ProductName VARCHAR(255),Category varchar(255),Unit varchar(255),Price varchar(255))")
c.execute("CREATE TABLE Orders(OrderID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,OrderDate Text,CustomerID INTEGER)")
c.execute("CREATE TABLE OrderDetails(OrderDetailID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,OrderID INTEGER,ProductID INTEGER, Quanity INTEGER)")
Customers = [
    {
        'CustomerName':"Alfreds Futterkiste",
        'Address':'Obere Str. 57',
        'City':'Berlin',
        'Country':'Germany'
    }
    ,
    {
        'CustomerName':'Ana Trujillo Emparedados',
        'Address':'Avda. de la Constitución 2222',
        'City':'México D.F.',
        'Country':'Mexico',
    }
    ,
    {
        'CustomerName':'Antonio Moreno Taquería',
        'Address':'Mataderos 2312',
        'City':'México D.F.',
        'Country':'Mexico',
    }
    ,{
        'CustomerName':'Around the Horn',
        'Address':'120 Hanover Sq.',
        'City':'London',
        'Country':'UK',
    }
    ,
    {
        'CustomerName':'Berglunds snabbköp',
        'Address':'Berguvsvägen 8',
        'City':'Luleå',
        'Country':'Sweden',
    }
]
product = [
    {
        'ProductName':'Chais',
        'Category':'Beverages',
        'Unit':'10 boxes x 20 bags',
        'Price':'18'
    }
    ,
    {
       'ProductName':'Chang',
        'Category':'Beverages',
        'Unit':'24 - 12 oz bottles',
        'Price':'19' 
    }
    ,
    {
        'ProductName':'Aniseed Syrup',
        'Category':'Condiments',
        'Unit':'12 - 550 ml bottles',
        'Price':'10'
    }
    ,
    {
        'ProductName':"Chef Anton''s Cajun Seasoning",
        'Category':'Condiments',
        'Unit':'48 - 6 oz jars',
        'Price':'22'
    }
    ,{
        'ProductName':"Chef Anton's Gumbo Mix",
        'Category':'Condiments',
        'Unit':'36 boxes',
        'Price':'21.35'
    }
]
Order = [
    {
        'OrderID':10248,
        'CustomerID':2,
        'OrderDate':'7/4/1996',
    }
    ,
    {
        'OrderID':10249,
        'CustomerID':3,
        'OrderDate':'7/5/1996',
    }
    ,
    {
        'OrderID':10250,
        'CustomerID':3,
        'OrderDate':'7/8/1996',
    },
    
    {
        'OrderID':10251,
        'CustomerID':5,
        'OrderDate':'7/8/1996',
    }
    ,
    {
        'OrderID':10252,
        'CustomerID':1,
        'OrderDate':'7/9/1996',
    }
]
Orderdetails = [
    {
        'OrderDetailID':1,
        'OrderID':10248,
        'ProductID':1,
        'Quanity':12,
    },
    {
        'OrderDetailID':2,
        'OrderID':10248,
        'ProductID':3,
        'Quanity':10,
    },
    {
        'OrderDetailID':3,
        'OrderID':10248,
        'ProductID':2,
        'Quanity':5,
    }
    ,
    {
        'OrderDetailID':4,
        'OrderID':10249,
        'ProductID':4,
        'Quanity':9,
    }
    ,
    {
        'OrderDetailID':5,
        'OrderID':10249,
        'ProductID':1,
        'Quanity':40,
    }
]
for i in range(0,len(Customers)-1):
    c.execute(f"INSERT INTO Customers(CustomerName,Address,City,Country) VALUES('{Customers[i]['CustomerName']}','{Customers[i]['Address']}','{Customers[i]['City']}','{Customers[i]['Country']}')")
    c.execute(f"INSERT INTO Products(ProductName,Category,Unit,Price) VALUES('{product[i]['ProductName']}','{product[i]['Category']}','{product[i]['Unit']}','{product[i]['Price']}')")
    c.execute(f"INSERT INTO Orders(OrderID,CustomerID,OrderDate)VALUES('{Order[i]['OrderID']}','{Order[i]['CustomerID']}','{Order[i]['OrderDate']}')")
    c.execute(f"INSERT INTO OrderDetails(OrderDetailID,OrderID,ProductID,Quanity)VALUES('{Orderdetails[i]['OrderDetailID']}','{Orderdetails[i]['OrderID']}','{Orderdetails[i]['ProductID']}','{Orderdetails[i]['Quanity']}')")
c.commit()
c.close()