let a;
a = 2;

let b = 0;

console.log(a);

// const num = 2;
// num = 5; 

// console.log(num);

var c = 3;
c = 45;
console.log(c);

// < 2015 ES5 (EcmaScript 5) var (глобальная)
// > 2016 ES6 (EcmaScript 6) let {} & const

// Типы данных
// Число (number)
// 0,  4, -23, 23.45, 

// Операторы: + - * / % **
let num1 = 34;
let num2 = 3;
let sum = num1 + num2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// Строка (string)
let nam = 'Daniil';
let profession = 'Pupil';
console.log(nam + profession); // Конкатенация (склеивание строк)
let age = 13;
console.log(nam + profession + age);
console.log('Имя: ' + nam + ', Профессия: ' + profession + ', Возраст: ' + age);

let user = prompt('Ваше имя: ')
// console.log(user);
alert('Привет, ' + user);
confirm('Вы уверены, что хотите покинуть сайт?')

// Экранируется только ", так как в этой ситуации
// двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No"

// \ не выводится, если после него идет обычный,
// а не специальный символ
console.log("Death is \so terribly final");
// => Death is so terribly final