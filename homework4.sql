--Задача 1.
--Вывести информацию о заказах клиентов
--не из Germany и не из China
SELECT
Orders.OrderID,
Customers.CustomerName
FROM Orders
JOIN Customers ON Orders.CustomerID=Customers.CustomerID
WHERE
NOT Customers.Country IN ('Germany', 'China')


--Задача 2.
--Вывести два самых дорогих товара
 --из категории Beverages
SELECT Products.ProductName,
Categories.CategoryName
FROM Products
Join Categories ON Products.CategoryID=1=Categories.CategoryID
ORDER BY Price DESC LIMIT 2


--Задача 3.
--Удалить поставщиков из China
DELETE
FROM Suppliers
WHERE Country ='China'


--Задача 4.
--Вывести все заказы клиента 10,
--которые повезет Federal Shipping
Select
Orders.OrderID,
Customers.CustomerName,
Shippers.ShipperName
FROM Orders
JOIN Customers ON Orders.CustomerID=10=Customers.CustomerID
JOIN Shippers ON Orders.ShipperID=Shippers.ShipperID
WHERE
	Shippers.ShipperName = 'Federal Shipping'


--Задача 5.
--Вывести два самых дорогих напитка из UK
SELECT ProductName
FROM Products
WHERE SupplierID IN (1)
ORDER BY Price DESC LIMIT 2


--Задача 6.
-- Вывести страны-поставщики напитков