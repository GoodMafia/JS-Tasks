// Задание 1


// Создать произвольную переменную, присвоить ей значение.

// C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let b = 2;

if (b == hidden){
    b = visible;
}
else {
    b = hidden;
}


// Задание 2

// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).


let c = 1;
if (c == 0){
    c = 1
    console.log(c + 1);
}
if (c < 0){
    console.log('less than zero');
}
if (c > 0){
    console.log(c * 10);
}


// Задание 3

// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
// Выполните это задание, используя тернарный оператор (: ?)


let number = prompt('Введите число: ');
let number1 = Number(number);
let resultNumber = number1 < 5 ? 0 : 1;
console.log(resultNumber);


// Задание 4

// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел


let num1 = prompt("Пожалуйста выберите первое число?");
let num11 = Number(num1);
let num2 = prompt("Пожалуйста выберите второе число?");
let num22 = Number(num2);
if (num11 > num22) {
  alert("Большее число - " + num11);
}
if (num22 > num11) {
  alert("Большее число - " + num22);
}
if (num11 == num22) {
  alert("ОШИБКА, ВЫ ВЫБРАЛИ ОДИНАКОВЫЕ ЧИСЛА!");
}


// Задание 5
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.


let num12 = prompt('Выберите число');
let num121 = Number(num12);
let num21 = prompt('Выберите второе число');
let num212 = Number(num21);
if (num121 % num212 == 0){
    console.log('false');
}
 else{
    console.log(num121 % num212);
} 



// Задание 6

// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).


let score = prompt("Введите ваш средний бал: ");
let score1 = Number(score);
if (1 <= score1 && score1 <= 4){
  alert("Двоечник, иди учись!");
}
if (5 <= score1 && score1 <= 8){
  alert("Неплохо, но давай еще поднажмем!");
}
if (9 <= score1 && score1 <= 10){
  alert("Ого, да ты настоящий отличник!");
}



// Задание 7

// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let score1 = prompt('Ваш балл за экзамен: ');
let project = prompt('Ваше количество выполненных проектов: ');

if (score1 > 90 || project > 10){
    console.log(100);
}
if (score1 > 75 && project >= 5){
    console.log(90);
}
if (score1 > 50 && project >= 2){
    console.log(50)
}
else {
    console.log(0);
}


// Задание 8

// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.


let d = prompt('Скольки дневная аренда?');
let d1 = Number(d);
if (d1 > 2 && d1 < 6){
    alert(40 * d1 - 20 + ' - cтоимость вашей аренды');
}
if (d1 >= 7){
    alert(40 * d1 - 50 + ' - стоимость вашей аренды');
}
if (d1 < 2){
    alert(40 * d1 + ' - стоимость вашей аренды');
}

// Задание 9

// Создать переменную и записать в нее число, например 10.
// 10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.

let a = 10;

for (let i = 0; i < 10; i++){
    a++;
    console.log(a);
}



// Задание 10

// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

for (i = 0; i < 8; i = i + 2){
    e = prompt('Введите число');
    e1 = Number(e);
    eResult = e1 == 10 ? 'Равно 10' : 'Не равно 10';
    console.log(eResult);
}


// Задание 11

// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
let f = 1;
for (i = 0; i < 8; i++){
    f = f + 1;
    console.log(f ** 2);
}

// Задание 12

// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

let a1 = 1;
for(i = 0; i < 100; i++){
    a1 = a1 + 1;
    console.log(a1);
    if (a1 % 3 == 0){
        console.log('Fizz');
    }
    if (a1 % 5 == 0){
        console.log('Buzz');
    }
    if (a1 % 5 == 0 && a1 % 3 == 0 {
       console.log('FizzBuzz');
    }
}
