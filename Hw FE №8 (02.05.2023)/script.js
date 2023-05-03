/*Задача 1.
Написать цикл, который создает множество параграфов
 с каждым десятым числом в промежутке от 100 до 50(т.е. 100, 90, 80, 70, 60, 50).
  Добавить созданные параграфы в div с классом numbers.

const main = document.querySelector("main")
for (let i = 0; i < numbers.length; i++) {
    main.innerHTML += `<div class="numbers">
        <p>${numbers[i]}</p>
    </div>`}

/*Задача 2.
Написать цикл, который проходится по массиву строк,
для каждой строки создает параграф и добавляет его в div с классом strings_container. 
Строки взять произвольные.

const main = document.querySelector("main")
for (let i = 0; i < container.length; i++) {
    main.innerHTML += `<div class="strings_container">
        <p>${container[i]}></p>
        </div>`
}

 Задача 3.
Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age
(данные взять произвольные) - и создает карточки только для совершеннолетних пользователей.
Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
Добавить все карточки в div с классом users_container.
   
const users = [
    {
        first_name: "Halina",
        last_name: "Naskovich",
        age: 41
    },
    {
        first_name: "Vasili",
        last_name: "Naskovich",
        age: 47
    },
    {
        first_name: "Kirill",
        last_name: "Naskovich",
        age: 21
    },

    {
        first_name: "Matsvei",
        last_name: "Naskovich",
        age: 12
    },
    {
        first_name: "Sofya",
        last_name: "Naskovich",
        age: 6
    }
]
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        console.log(`${users[i].first_name} ${users[i].last_name} ${users[i].age}`)
    }
}
*/


