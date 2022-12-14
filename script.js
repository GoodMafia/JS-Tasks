// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

let sum = function(a, b){
    if (a = undefined || b = undefined){
        return 'Введите 2 параметра';
    else if (typeof a != 'number' || typeof b != 'number'){
        return 'Введенные данные не являются числами';
    }
return a + b;
}

// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

// function square(a) {
//   console.log(a * a)
// }

// square(10) // 100

// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a){
    if (a = undefined){
       console.error(`Uncaught Error: Функция "square" не может быть вызвана без аргумента`);
    } else {
    console.log(a * a);
    }
}

square(4);

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let guessTheNumber = (userNumber) => {
    let generatedNumber = getRandomInteger(0, 10);
    if (userNumber < 0 || userNumber > 10){
        console.log('Нечестная игра!');
    }
    else {
    if (userNumber == generatedNumber){
        return 'Вы выиграли!';
    }   else {
        return `Вы не угадали, ваше число - ${generatedNumber}!`;
    }
    }
}
guessTheNumber(2);

// Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];
let filterFor = (arr, a) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > a){
            newArr.push(arr[i]);
        }
    }
}
filterFor(arr, 5);

// Задание 5

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
let arraytWithNumbers = ['5', 'sdfs', '2', 'fd'];
let copyArr = (array) => {
    const newArray = array.map(item => item);
    return newArray;
}
copyArr(arraytWithNumbers);
// Задание 6

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.


// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}
let sumObjectValues = (object) => {
    let sum = 0;
    for (prop in object){
        if (typeof object[prop] == 'number'){
            sum += object[prop] 
        }
    }
    return sum;
} 
sumObjectValues(objectWithNumbers);
