'use strict'
/*
  use strict это строгий режим javascript 
  который не позволяет использовать нестандартные вещи в коде
  и помогает избежать ошибок.
  Без use strict можно не указывать типы переменных, например let, const, var
  и можно использовать нестандартные символы в переменных, например $, _, @
*/ 

/*    
  в перменной let можно задать новое значение и переименовать её
  в перменной const нельзя задать новое значение и переименовать её -
  нужно использовать const, если значение не будет меняться в коде
*/
let name = 'Владимир';
const age = 25;


// что бы узнать какой тип данных используется есть функция typeof
// const isUser = true;
// console.log(typeof isUser); // выведет boolean

// Тип данных object нельзя преобразовать в String или Number иначе он выведет в консоль [object Object]

const obj = {
  name: 'Владимир',
}

console.log(String(obj)); // Выводит [object Object]

const result = 102 / (21 + +'31') - 23 ** 2 

console.log(result);

// операторы сравнения 
console.log(10 == 10); // true равно
console.log(10 != 10); // false не равно
console.log(10 > 3); // true больше
console.log(10 < 3); // false меньше
console.log(10 >= 10); // true больше или равно
console.log(11 <= 10); // false меньше или равно

let year = 2022;
const non = false;

if (year == 2023 || non == false) {
  console.log('Год 2023');
} else {
  console.log('Год не 2023');
}