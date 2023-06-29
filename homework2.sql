

Задача 1.Вывести телефоны всех поставщиков,
кроме тех, что из Germany и France.

SELECT SupplierName,
Phone
FROM Suppliers
WHERE
NOT Country IN ('Germany','France')


Задача 2.Добавить два произвольных товара.

INSERT INTO Products(ProductName,SupplierID,CategoryID,Unit,Price)
VALUES
('Chocolate', '', '', '', ''),
('Coca-cola', '', '', '', '');


Задача 3.Удалить поставщиков из USA и Germany.

DELETE
FROM Suppliers
WHERE Country IN ('USA', 'Germany');


Задача 4.Вывести все товары до 20 EUR
из категорий 3 и 6 по убыванию цены.

SELECT ProductName, Price
FROM Products
WHERE
Price <=20
AND
CategoryID IN (3,6)
ORDER BY Price DESC


Задача 5.Вывести номера трех последних заказов.

 SELECT *
 FROM Orders
 ORDER BY OrderID DESC LIMIT 3


