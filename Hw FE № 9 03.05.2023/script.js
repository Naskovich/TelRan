/*Задача 1.Создать кнопку и красный квадрат с размерами 200х200px.
 При клике на кнопку менять у квадрата цвет заднего фона на зеленый
  и уменьшать его до размеров 100х100px.*/

/*function changeColor() {
  document.querySelectorAll(".square").forEach(v => v.style.backgroundColor = "green");

}*/

/*Задача 2.Создать кнопку и розовый квадрат с размерами 200х200px.
 При клике на кнопку менять цвет на синий 
 и выводить в консоль обновленный цвет квадрата.*/
 
/*{
  document.querySelectorAll(".square1").forEach(v => v.style.backgroundColor = "blue");
  console.log("Blue")
}*/

/*Задача 3.Создать кнопку и квадрат с размерами 150х150px.
 При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

function toggle_theme() {
  const target = document.querySelector(".square2");
  target.classList.toggle("is-dark")
}*/
 

/*Задача 4.	Создать кнопку и div с классом root. 
При клике на кнопку в div создается параграф синего цвета.
 Текст параграфа произвольный.*/
/*function changeColor() {
  document.querySelectorAll("p").forEach(v => v.style.backgroundColor = "blue");

}*/

/*Задача 5.	Создать кнопку и div с классом root. 
При клике на кнопку в div создаются по очереди параграфы
 синего и зеленого цветов. Первый цвет синий.*/
function changeColor() {
  document.querySelectorAll('p').forEach(v => v.style.backgroundColor = "blue");
  document.querySelectorAll('p1').forEach(v => v.style.backgroundColor = "green");

}