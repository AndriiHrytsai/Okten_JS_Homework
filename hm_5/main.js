//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
// function tagsAbout(name,action,attributes) {
// this.name = name;
// this.action = action;
// this.attributes = attributes;
//
// }
// let tagsA = new tagsAbout(
//     'tags a',
//     'Тег <a> является одним из <важ></важ>ных элементов HTML и предназначен для создания ссылок.',
//     [{accesskey: '- Активация ссылки с помощью комбинации клавиш' ,  coords: ' -Устанавливает координаты активной области.'}]
// )
// console.log(tagsA);
//
// let tagsDiv = new tagsAbout(
//     'tags div',
//     'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//     [{align: ' - Задает выравнивание содержимого тега' , title: 'Добавляет всплывающую подсказку к содержимому.'}]
// )
// console.log(tagsDiv);
//
// let tagsH1 = new tagsAbout(
//     'tags h1',
//     'тег h1 представляет собой наиболее важный заголовок первого уровня',
//     [{align: ' - Определяет выравнивание заголовка.'}]
// )
// console.log(tagsH1);
//
// let tagsSpan = new tagsAbout(
//     'tags span',
//     'Тег span предназначен для определения строчных элементов документа. ',
//     [{dir: ' - Задает направление и отображение текста — слева направо или справа налево.'}]
// )
// console.log(tagsSpan);
//
// let tagsInput = new tagsAbout(
//     'tags input',
//     'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса',
//     [{alt: ' - Альтернативный текст для кнопки с изображением.' , border: 'Толщина рамки вокруг изображения.'}]
// )
// console.log(tagsInput);
//
// let tagsForm = new tagsAbout(
//     'tags form',
//     'Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     [{name: ' - Имя формы.' , method: 'Метод протокола HTTP.'}]
// )
// console.log(tagsForm);
//
// let tagsOption = new tagsAbout(
//     'tags option',
//     'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.',
//     [{label: ' - Указание метки пункта списка.' , disabled: 'Заблокировать для доступа элемент списка.'}]
// )
// console.log(tagsOption);
//
// let tagsSelect = new tagsAbout(
//     'tags select',
//     'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//     [{form: ' - Связывает список с формой..' , size: 'Количество отображаемых строк списка.'}]
// )
// console.log(tagsSelect);

//-  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
// class allTags {
//     constructor (name, action, attributes) {
//         this.name = name;
//         this.action = action;
//         this.attributes = attributes;
//     }
// }
// let tagsA = new allTags(
//     'tags a',
//     'Тег <a> является одним из <важ></важ>ных элементов HTML и предназначен для создания ссылок.',
//     [{accesskey: '- Активация ссылки с помощью комбинации клавиш' ,  coords: ' -Устанавливает координаты активной области.'}]
// )
// console.log(tagsA);
//
// let tagsDiv = new allTags(
//     'tags div',
//     'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//     [{align: ' - Задает выравнивание содержимого тега' , title: 'Добавляет всплывающую подсказку к содержимому.'}]
// )
// console.log(tagsDiv);
//
// let tagsH1 = new allTags(
//     'tags h1',
//     'тег h1 представляет собой наиболее важный заголовок первого уровня',
//     [{align: ' - Определяет выравнивание заголовка.'}]
// )
// console.log(tagsH1);
//
// let tagsSpan = new allTags(
//     'tags span',
//     'Тег span предназначен для определения строчных элементов документа. ',
//     [{dir: ' - Задает направление и отображение текста — слева направо или справа налево.'}]
// )
// console.log(tagsSpan);
//
// let tagsInput = new allTags(
//     'tags input',
//     'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса',
//     [{alt: ' - Альтернативный текст для кнопки с изображением.' , border: 'Толщина рамки вокруг изображения.'}]
// )
// console.log(tagsInput);
//
// let tagsForm = new allTags(
//     'tags form',
//     'Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     [{name: ' - Имя формы.' , method: 'Метод протокола HTTP.'}]
// )
// console.log(tagsForm);
//
// let tagsOption = new allTags(
//     'tags option',
//     'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.',
//     [{label: ' - Указание метки пункта списка.' , disabled: 'Заблокировать для доступа элемент списка.'}]
// )
// console.log(tagsOption);
//
// let tagsSelect = new allTags(
//     'tags select',
//     'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//     [{form: ' - Связывает список с формой..' , size: 'Количество отображаемых строк списка.'}]
// )
// console.log(tagsSelect);

//Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// let car = {
//     model: 'Daewoo lanos',
//     producer: 'Poland',
//     year: 2002,
//     maxSpeed: 175,
//     еngineСapacity: 1500,
// }
//
// //drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// function drive(object){
//     console.log(`їдемо зі швидкістю ${object.maxSpeed} на годину`);
// }
// drive(car);
//
// //info () - яка виводить всю інформацію про автомобіль
// function info() {
//     console.log(car);
// }
// info(car);
//
// //increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// function increaseMaxSpeed(object,newSpeed) {
//     object.maxSpeed += newSpeed;
//     console.log(`нова швидкість ${object.maxSpeed} км/год`)
// }
// increaseMaxSpeed(car,15);
//
// //changeYear (newValue) - змінює рік випуску на значення newValue
// function ChangeYear(object,newYear) {
//     object.year = newYear;
//     console.log(`рік випуску змінився на ${newYear}`)
// }
// ChangeYear(car,2013);
//
// //addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function addDriver(object,driver) {
//    object.driver = driver;
// }
// addDriver(car,'Andrii');
// console.log(car);


//************************************************   РОБОТА В АУДИТОРІЇ***************************************************8

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, producer, year, maxSpeed, capacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//     this.info = function () {
//         console.log(`${model} * ${producer} * ${year} * ${maxSpeed} * ${capacity}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed =3) {
//         newSpeed += maxSpeed
//         console.log(`нова швидкість ${newSpeed} км/год`)
//     }
//     this.changeYear = function (newValue= 2013) {
//         year = newValue;
//         console.log(`рік випуску змінений на ${newValue}`)
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let stalker = new Car('BMW','Poland',2002,170,2300);
// stalker.drive();
// stalker.info();
// stalker.increaseMaxSpeed(22);
// stalker.changeYear();
// stalker.addDriver({name: 'Andrii', year: 20});
// console.log(stalker);

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//         }
//         this.info = function () {
//             console.log(`${model} * ${producer} * ${year} * ${maxSpeed} * ${capacity}`)
//         }
//         this.increaseMaxSpeed = function (newSpeed = 3) {
//             newSpeed += maxSpeed
//             console.log(`нова швидкість ${newSpeed} км/год`)
//         }
//         this.changeYear = function (newValue = 2013) {
//             year = newValue;
//             console.log(`рік випуску змінений на ${newValue}`)
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     }
// }
// let stalkerTwo = new Car('BMW','Poland',2002,170,2300);
// stalkerTwo.drive();
// stalkerTwo.info();
// stalkerTwo.increaseMaxSpeed(22);
// stalkerTwo.changeYear();
// stalkerTwo.addDriver({name: 'Andrii', year: 20});
// console.log(stalkerTwo);

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Darling{
//     constructor(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }
// let darlingArray = [];
//
// let darlingOne = new Darling('Viktoria', 20, 38);
// darlingArray.push(darlingOne);
//
// let darlingTwo = new Darling('Marta', 25, 37);
// darlingArray.push(darlingTwo);
//
// let darlingThree = new Darling('Maria', 38, 36);
// darlingArray.push(darlingThree);
//
// let darlingFour = new Darling('Olia', 23, 41);
// darlingArray.push(darlingFour);
//
// let darlingFive = new Darling('Olesya', 19, 37);
// darlingArray.push(darlingFive);
//
// let darlingSix = new Darling('Karina', 15, 36);
// darlingArray.push(darlingSix);
//
// let darlingSeven = new Darling('Dasha', 21, 40);
// darlingArray.push(darlingSeven);
//
// let darlingEight = new Darling('Sencha', 68, 43);
// darlingArray.push(darlingEight);
//
// let darlingNine = new Darling('Vlada', 4, 22);
// darlingArray.push(darlingNine);
//
// let darlingTen = new Darling('Alisa', 47, 35);
// darlingArray.push(darlingTen);
//
//
// class Prince
// {
//     constructor(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }
// let prince = new Prince('Andriy', 20, 38);
// for (let arr of darlingArray) {
//         if(arr.legSize === prince.legSize){
//             console.log(arr);
//     }
// }

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
// function Darling(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
// }
// let darlingArray = [];
//
// let darlingOne = new Darling('Viktoria', 20, 38);
// darlingArray.push(darlingOne);
//
// let darlingTwo = new Darling('Marta', 25, 37);
// darlingArray.push(darlingTwo);
//
// let darlingThree = new Darling('Maria', 38, 36);
// darlingArray.push(darlingThree);
//
// let darlingFour = new Darling('Olia', 23, 41);
// darlingArray.push(darlingFour);
//
// let darlingFive = new Darling('Olesya', 19, 37);
// darlingArray.push(darlingFive);
//
// let darlingSix = new Darling('Karina', 15, 36);
// darlingArray.push(darlingSix);
//
// let darlingSeven = new Darling('Dasha', 21, 40);
// darlingArray.push(darlingSeven);
//
// let darlingEight = new Darling('Sencha', 68, 43);
// darlingArray.push(darlingEight);
//
// let darlingNine = new Darling('Vlada', 4, 22);
// darlingArray.push(darlingNine);
//
// let darlingTen = new Darling('Alisa', 47, 35);
// darlingArray.push(darlingTen);
//
//
// function Prince(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
//
// let prince = new Prince('Andriy', 20, 38);
// for (let arr of darlingArray) {
//     if (arr.legSize === prince.legSize) {
//         console.log(arr);
//     }
// }




