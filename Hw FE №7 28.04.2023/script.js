/*Задача 1. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль 
все четные числа от большего к меньшему.*/

/*const numbers = [5, 10, 13, 22, 26, 31]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}
*/
 /*Задача 2. Напишите функцию power, которая принимает два числовых аргумента 
 (основание степени и саму степень) и возвращает  число
  в указанной степени. Значение степени должно быть указано по умолчанию 2.*/
 
/*const powers = [10, 3]
powers.forEach(function (power) {
    console.log(power ** 2)
})*/

/*Задача 3.	Напишите функцию, которая принимает числовой аргумент n
 и считает сумму чисел от 1 до n.*/

/*function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(7));*/


/*Задача 4. Напишите функцию, которая принимает два числовых аргумента n и m
 и считает сумму четных чисел и нечетных чисел от n до m.
  Суммы выведите в консоль (в начале сумму четных чисел, 
    а затем сумму нечетных).*/

/*function f(n, m) {
    var sum = 0, mult = 0, max, min;

    if (n > m) {
        max = n;
        min = m;
    } else {
        max = m;
        min = n;
    }

    for (var i = min; i <= max; i++) {
        if (i % 2) {
            mult += i;
        } else {
            sum += i;
        }
    }

    console.log('sum:' + sum);
    console.log('mult:' + mult);
}
f(2, 8);*/

/*Задача 5. Напишите функцию, которая принимает в качестве аргументов массив строк,
 а возвращает первый самый длинный элемент массива. 
 Если входной массив пуст, функция возвращает null. 
 Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
  */

var myarray = ["Halina", "Sofya", "KIrill", "Matsvei"];
var maxName = null;
for (i = 0; i < myarray.length; i++) {
    if (myarray[i].length > maxName) {
        maxName = myarray[i].length;
    }
}
console.log(maxName)








    