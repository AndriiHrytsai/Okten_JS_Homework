//- Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let elementDiv = document.createElement('button');
// elementDiv.setAttribute('id', 'text');
// elementDiv.style.backgroundColor = 'red';
// elementDiv.innerText = 'Clicker button';
// document.body.appendChild(elementDiv);
// let elementById = document.getElementById('blue');
// elementDiv.onclick = () => {
//     console.log('hello');
//     elementById.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let elementButton = document.createElement('button');
// elementButton.setAttribute('id', 'text');
// elementButton.style.backgroundColor = 'violet';
// elementButton.innerText = 'Clicker button';
//
// document.body.appendChild(elementButton);
//
// elementButton.onclick = () => {
//     console.log('hello');
//     elementButton.style.display = 'none';
// }

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let htmlInputElement = document.createElement("input");
// let htmlButtonElement = document.createElement("button");
// htmlButtonElement.innerText = 'OK';
// document.body.appendChild(htmlInputElement);
// document.body.appendChild(htmlButtonElement);
// htmlButtonElement.onclick = () => {
//     if(htmlInputElement.value < 18){
//         alert('Йди уроки вчи')
//     }
//     else{
//         alert('Може заходити на різні сайти але будь обережний');
//     }
//     htmlInputElement.value = '';
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let element = document.createElement('button');
// element.innerText = 'Hello its me';
// element.style.backgroundColor = 'red';
// document.body.appendChild(element);
//
// let xz = document.getElementById('blue');
// xz.style.display = 'none';
// let status = true
// element.onclick = () => {
//     status ? xz.style.display = '' : xz.style.display = 'none'
//     status = !status
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let coments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'js', body: 'мова програмування'},
//     {title: 'car', body: 'машина машина машина'},
//     {title: 'andriy', body: 'andriy sldkjfiuvsdhnf'}
// ]
// for (let coment of coments) {
//     let button = document.createElement("button");
//     let div = document.createElement("div");
//     div.setAttribute('class', 'allAbout');
//     div.innerHTML = ` title : ${coment.title}  body : ${coment.body}`;
//     document.body.appendChild(div);
//     document.body.appendChild(button);
//     div.appendChild(button);
//     button.innerText = 'Стерти';
//     button.onclick = () => {
//         div.style.display = 'none';
//     }
// }

// - Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.createElement("button");
// button.style.backgroundColor = 'red';
// button.innerText = 'Зчитати';
// document.body.appendChild(button);
// let name = document.getElementById('name');
// let surname = document.getElementById('surname');
// let age = document.getElementById('year');
// let town = document.getElementById('town');
//
// button.addEventListener("click",(ev) =>{
//     console.log(name.value);
//     console.log(surname.value);
//     console.log(age.value);
//     console.log(town.value);
// });

// - Створити функцію, яка генерує таблицю.
//   Перший аргумент визначає кількість строк.
//   Другий параметр визначає кліькіть ячеєк в кожній строці.
//   Третій параметр визначає елемент в який потрібно таблицю додати.
//
// let table = (stroka, yacheika, tagElement) => {
//     let table = document.createElement("table");
//     for (let i = 0; i < stroka; i++) {
//         let row = document.createElement('tr');
//         table.appendChild(row);
//         for (let j = 0; j < yacheika; j++) {
//             let column = document.createElement('th');
//             row.appendChild(column);
//             column.innerText = 'Andriy';
//         }
//     }
//     let tagElem = document.createElement(tagElement);
//     tagElem.appendChild(table);
//     document.body.append(tagElem);
// }
// table(8,5,'a');

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// const arrCar = [
//     {
//         alt: 'carOne',
//         url: './img/gelik.jpg'
//     },
//     {
//         alt: 'carTwo',
//         url: './img/bmw.jpg'
//     },
//     {
//         alt: 'carThree',
//         url: './img/audi.jpg'
//     },
// ]
// let leftButton = document.getElementById('leftClick');
// let rightButton = document.getElementById('rightClick');
// const imgContainer = document.getElementById('imgContainer')
// let wrapper = 0;
// imgContainer.style.width = '500px';
// leftButton.onclick = () => {
//     if (wrapper - 1 < 0) {
//         wrapper = arrCar.length - 1;
//     } else {
//         wrapper = wrapper - 1;
//     }
//     imgContainer.src = arrCar[wrapper].url;
//     imgContainer.alt = arrCar[wrapper].alt
// }
// rightButton.onclick = () => {
//     if (wrapper + 1 > arrCar.length - 1) {
//         wrapper = 0;
//     } else {
//         wrapper = wrapper + 1;
//     }
//     imgContainer.src = arrCar[wrapper].url;
//     imgContainer.alt = arrCar[wrapper].alt;
//     imgContainer.setAttribute('src', arrCar[wrapper].url);
// }


//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
// let necenzura = ['лох', 'дебіл', 'далбайоб', 'дагмат', 'придурок', 'кончений'];
// let input = document.createElement("input");
// document.body.append(input);
// let button = document.createElement("button");
// button.innerText = 'Перевірити';
// button.style.backgroundColor = 'red';
// document.body.append(button);
// button.onclick = () => {
//     necenzura.some(value => {
//         if (value === input.value) {
//             return alert('Не матюкайтесь будь ласка');
//         }
//         return 0;
//     })
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
//
// let necenzura = ['лох', 'дебіл', 'дурак', 'придурок', 'кончений'];
// let input = document.createElement("input");
// document.body.append(input);
// let button = document.createElement("button");
// button.innerText = 'Перевірити';
// button.style.backgroundColor = 'red';
// document.body.append(button);
// button.onclick = () => {
//     necenzura.some(value => input.value.includes(value)) ? alert('мат') : alert('ok');
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// ***************************************************************************************

// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// const main = document.getElementById('main');
// const render = (userArr, target) => {
//     target.innerHTML = '';
//     userArr.forEach(value => {
//         const div = document.createElement('div');
//         div.innerText = JSON.stringify(value);
//         target.appendChild(div)
//     })
// }
// render(usersWithAddress, main)
//
// const form = document.forms.myForm;
// form.onchange = () => {
//     const {status, gt, city} = form
//     let res = usersWithAddress;
//     // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//     if (status.checked) {
//         res = res.filter(value => !value.status);
//     }
//     // 2й - оставляет старше 29 лет включительно
//     if (gt.checked) {
//         res = res.filter(value => value.age >= 29)
//     }
//     // 3й - оставляет тех у кого город киев
//     if (city.checked) {
//         res = res.filter(value => value.address.city === 'Kyiv')
//     }
//     render(res, main);
// }
