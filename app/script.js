//Тестовый комментарий номер 1
/*
  Тестовый комментарий номер 2
*/

'use strict'
/*
  use strict это строгий режим javascript 
  который не позволяет использовать нестандартные вещи в коде
  и помогает избежать ошибок.
  Без use strict можно не указывать типы переменных, например let, const, var
*/ 

// Выводит в консоль сообщение Hello, world!
// console.log(
//   'Hello, world!'
// );

// Переменная hello со значением Hello, world!
let hello
hello = 'Hello, world!'
// Выводит в консоль переменную hello
console.log(hello);

// Задаем переменной новое значение
hello = "Привет, мир!"
console.log(hello);

/*    
  в перменной let можно задать новое значение и переименовать её
  в перменной const нельзя задать новое значение и переименовать её -
  нужно использовать const, если значение не будет меняться в коде
*/

// const myName = "Владимир"
// const age = 30

// console.log(myName, age + " лет");

const name = "Владимир" 
const surname = name + " Кузнецов"

console.log(surname);