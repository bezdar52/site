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
// console.log(10 == 10); // true равно
// console.log(10 != 10); // false не равно
// console.log(10 > 3); // true больше
// console.log(10 < 3); // false меньше
// console.log(10 >= 10); // true больше или равно
// console.log(11 <= 10); // false меньше или равно

let year = 2023;
const non = false;

// оперант && это и допустим есть два условия и они оба должны быть true
// оперант || это или допустим есть два условия и одно из них должно быть true 

if (year == 2023 && non == false) {
  console.log('Год 2023');
} else {
  console.log('Год не 2023');
}

function cprint(text) {
  console.log(text);
}

function input(text, number) {
  return prompt(text, number);
}

// const userage = input("Укажите ваш возраст:", 18);

// if (userage >= 18) {
//   cprint("Вы проходите!");
// } else {
//   cprint("Вы не совершеннолетний!")
// }

// const aage = +prompt("Укажите ваш возраст:", 18);

// switch (true) {
//   case aage == 18:
//     cprint("Вы совершеннолетний!");
//     break;
//   case aage == 25:
//     cprint("Вы уже взрослый!");
//     break;
//   case aage > 25:
//     cprint("Вы старик");
//     break;
//   default:
//     cprint(`Ваш возраст: ${aage}` );
// }

// function logMessage(message = 'тест', count = 1) {
//   const messageformate = `${message}` 

//   for (let i = 0; i < count; i++) {
//     console.log(messageformate);
//   }
// }

// logMessage(undefined, 5);

function getName(name) {
  if(!name) return "Ошибка... Не указано имя"
  return `О ты же тот самый как его там ${name}`
}

console.log(getName('Владимир'));