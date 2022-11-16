// Задание 1
// Задайте в коде переменную n с числовым значением.
// 1) с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
// 2) с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

let n = 2;
if (n >= 0 && n <= 100) {
  alert("true");
}
else if (n >= 0 || n <= 100) {
  alert("true");
}

// Задание 2
// Создайте объект с именами и заработными платами
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.

let engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
};
for (let property in engineers){
    console.log(`Заработная плата ${property} составляет ${engineers[property]} рублей`);
}

// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

let numbers1 = [1, 2, 3, 4, 5];
for (let i = 1; i < numbers1.length; i += 2){
    console.log(numbers1[i]);
}


// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 0; i < numbers.length; i++){
     console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
}



// Задание 5
// Дан массив объектов, например:

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0

}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}
]

for (let i = 0; i < questions.length; i++){
  questions[i].usersAnswer = null;
}
console.log(questions);



// Задание 6


// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]


// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком


// 2) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).

// 3) Посчитать и вывести в консоль сумму четных элементов в массиве.


// 4) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.


// 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.


// 1)
let numbers2 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let item of numbers2){
    console.log(item);
}
for (let i = 0; i < numbers2.length; i++){
    console.log(numbers2[i]);
}

// 2)

let numbers2 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let sum1 = 0;
for (let i = 0; i < numbers2.length; i++){
    sum1 = numbers2[i] + sum1;
}
console.log(sum1);

// 3)

let numbers2 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 0; i < numbers2.length; i += 2){
    console.log(numbers2[i]);
}

// 4)

let numbers2 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let max = numbers2[0];
for (let i = 0; i < numbers2.length; i++){
    if (max < numbers2[i]){
      max = numbers2[i];
    }
}
console.log(max);

// 5) 

for (let i = 0; i < numbers2.length; i++){
    if (max == numbers2[i]){
        console.log(i);
    }
}

// Задание 7
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];
for (let i = 0; i < arr.length; i++){
  if (arr[i] > 0){
      newArr[i] = arr[i];
  }
  console.log(newArr[i]);
}

// Задание 8

// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

let nums = [5, 4, 3, 8, 0];
let limit = 5;
let nums1 = [];
for (i = 0; i < nums.length; i++){
    if(nums[i] >= limit){
      nums1[i] = nums[i];
    }
    console.log(nums1[i]);
}

// Задание 9

// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}];
for (let i = 0; i < users.length; i++){
  if(users[i].age > 15){
    alert(users[i].name);
  }
}

// Задание 10

// Задать массив слов. Например:
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):
// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

// 1)

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let vegetables2 = [];
for (let i = 0; i < vegetables.length; i++){
    vegetables2[i] = {word: vegetables[i], length: vegetables[i].length};
}
console.log(vegetables2);

// 2)

for(let item of vegetables2){
console.log(`${item.word} - ${item.length}`);
}
