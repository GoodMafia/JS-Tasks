// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

let input = document.querySelector('.input');
let list = document.querySelector('.list');

input.addEventListener('keydown', function(event) {
    let key = event.key;
    let li = document.createElement('li');
    li.textContent = key;
    list.appendChild(li);
});

// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

let input1 = document.querySelector('.input');

input1.addEventListener('keyup', function() {
  console.log(input1.value);
});

// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form = document.querySelector('.myForm');
const input2 = document.getElementById('.myInput');
const list1 = document.getElementById('.myList');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const li1 = document.createElement("li");
  li1.innerText = input.value;
  list.appendChild(li1);
  input.value = "";
});

// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evelЗадание 4

const form1 = document.querySelector('#calculator');
const resultDiv = document.querySelector('#result');

form1.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const num1 = parseFloat(form1.num1.value);
  const num2 = parseFloat(form1.num2.value);
  const operator = form1.operator.value;
  
// 1) С помощью if

  let result;
  
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  }
  
  resultDiv.textContent = result;

// 2) С помощью eval

    const expression = `${num1} ${operator} ${num2}`;
    const result = eval(expression);

    resultDiv.textContent = result;
});

// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
function random() {
    return Math.floor(Math.random() * 256);
}
const button = document.querySelector('.myButton');

button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
});

button.addEventListener('mouseleave', () => {
  button.style.transform = `rotate(${random() * 360 - 180}deg)`;
});
