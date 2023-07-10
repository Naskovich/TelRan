--Задача 1.
--Вывести клиентов из Germany,
--у которых в имени есть вхождение a,
--и клиентов из France, у которых в имени есть вхождение b
SELECT *
FROM Customers
WHERE
Country='Germany'AND CustomerName LIKE '%a%'
OR
Country='France'AND CustomerName LIKE '%b%'


--Задача 2.
--Вывести два самых дешевых товара,
--названия которых заканчиваются на u.
SELECT *
FROM Products
WHERE ProductName LIKE '%u'
ORDER BY Price LIMIT 2

--Задача 3.
--Применить постоянную скидку
--к товарам из категорий 1 и 3, причем:
--
--для категории 1 - скидка 29%
--для категории 3 - 0.5%
Update Products
SET
Price=CASE
When CategoryID=1 Then Price * 0.71
When CategoryID=3 Then Price * 0.995
END


--Задача 4.
--Вывести данные о компаниях-перевозчиках,
--причем скрыть номера телефонов тех компаний,
--которые из Australia (проекция: название_компании, номер_телефона)







--Задача 5.
--Вывести города клиентов не из Germany
--и города поставщиков не из USA

SELECT City From Customers
Where NOT Country='Germany'
UNION
SELECT City From Suppliers
Where NOT Country='USA'