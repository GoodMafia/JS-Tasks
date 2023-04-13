// Задание 1
// 1)
// Задать объект с полем name.
// Задать переменную, которая будет хранить JSON упомянутого объекта.
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
// 2)
// Создать переменную user, в которой хранится объект.
// Записать переменную в localStorage.
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

// 1)
const obj = { name: "John" };
const jsonStr = JSON.stringify(obj);
const parsedObj = JSON.parse(jsonStr);
// 2)
const user = { name: "Jane" };
localStorage.setItem("user", JSON.stringify(user));
const newUser = JSON.parse(localStorage.getItem("user"));

// Задание 3
// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.
// Пример реализации:
// https://ucarecdn.com/6e689f37-...
// ПОДСКАЗКИ
// - значение атрибута можно узнать с помощью метода element.getAttribute(' '). Но если атрибут стандартный, то можно его забрать с помощью одноименного свойства. Например, адрес картинки = img.src (img - переменная, в которой хранится картика).
// Порядок работы:
// 1. Собираем изображения в массив.
// 2. Вешаем обработчик клика на все окно - window. Так js будет "слушать" клики и записывать в event.target тот элемент, по которому пришелся клик (event нужно обязятельно добавить как параметр в addEventListener).
// window.addEventListener('click', (event => { }))
// Перебираем массив картинок, сравниваем их с event.target. Забираем из картинки, на которую пришелся клик, url (значение атрибута src), вешаем на нее класс active, а у остальных картинок убираем. Записываем url активной картинки в память и ставим ее на фон body.
// При загрузке страницы (в начале кода JS) добавляем проверку, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить этот класс и поставить на фон первую картинку из массива.




const body = document.querySelector('body');
const lastActiveImage = localStorage.getItem('activeImage');
window.addEventListener('click', (event) => {

    images.forEach((image) => {
      const img = document.querySelector(`img[src="${image.url}"]`);
      img.classList.remove('active');
    });

    event.target.classList.add('active');

    localStorage.setItem('activeImage', url);

        body.style.backgroundImage = url(${url});
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
    
        const message = document.createElement('p');
        message.textContent = alt;
        body.appendChild(message);
      }
    });
    

    if (lastActiveImage) {
      const img = document.querySelector(img[src="${lastActiveImage}"]);
      img.click();
    }
