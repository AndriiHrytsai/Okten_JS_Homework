//*************** Методи масивів *************************************8

//concat

//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
//
// let arr = ['a', 'b', 'c'];
// let arrTwo = [1, 2, 3];
// let b = arr.concat(arrTwo);
// console.log(b);

//push

//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
//
// let arr = ['a', 'b', 'c'];
// arr.push(1,2,3);
// console.log(arr);

//reverse

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
//
// let arr = [1,2,3];
// arr.reverse();
// console.log(arr);

//push

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//  let arr = [1,2,3]
// arr.push(4,5,6);
// console.log(arr);

//unshift

//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arrTwo = [1,2,3]
// arrTwo.unshift(4,5,6);
// console.log(arrTwo);

//shift

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq'];
// let c = arr.shift();
// console.log(c);

//pop

//  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq'];
// let c = arr.pop();
// console.log(c);

//slice

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1,2,3,4,5];
// let newArr = arr.slice(0,3);
// console.log(newArr);
//
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arrTwo = [1,2,3,4,5];
// let newArry = arrTwo.slice(3);
// console.log(newArry);

//splice

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1,2,3,4,5];
// arr.splice(1,2);
// console.log(arr);
//
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//
// let arr2 = [1,2,3,4,5];
// arr2.splice(0,1);
// arr2.splice(3,1);
// console.log(arr2);
//
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let arr3 = [1,2,3,4,5];
// arr3.splice(3,0, 'a','b','c');
// console.log(arr3);
//
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let arr4 = [1,2,3,4,5];
// arr4.splice(1,0,'a','b');
// arr4.splice(6,0,'c');
// arr4.splice(8,0,'e');
// console.log(arr4);

//sort

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let arr = [3, 4, 1, 2, 7];
// arr.sort((a, b) => a-b); // [1,2,3,4,7]
// // arr.sort((a, b) => b-a); // [7,4,3,2,1]
// console.log(arr);

//Object.keys

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей
//
// let obj = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(obj));

//***************************** Tasks************************************

//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения. Показать решение.
//
// let str = 'andriy';
// str =str.split('');
// str =  str[0].toUpperCase() + str.splice(1).join('');
// console.log(str);

//  Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. Показать решение.
// let str = '123456';
// str = str.split('').reverse().join('');
// console.log(str)

//  Проверьте, что строка начинается на http://. Показать решение.
// let str = 'http:// dnasklndalkdjd'
// let x = str.startsWith('http://') ? 'yes' : 'no' ;
// console.log(x);

//  Проверьте, что строка заканчивается на .html. Показать решение.
// let str = 'http:// dnasklndalkdjd .html'
// let x = str.endsWith('.html') ? 'yes' : 'no' ;
// console.log(x);

//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// let sqrt = (x) => Math.pow(x, 2);
// console.log(sqrt(6));

//  Сделайте функцию, которая возвращает сумму двух чисел.
// let sum = (a, b) => a + b;
// console.log(sum(3, 6)); // стрілочна ф-ція
//
// function sum2(a, b, cb) {
//     cb(a, b);
// }
//
// sum2(6, 3, ((x, y) => {  // call Back
//     console.log(x + y);
// }))

//  Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// let mathik = (a, b, c) => (a - b) / c;
// console.log(mathik(5, 3, 2));

//  Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
//
// function dayOfWeek(num) {
//     switch (num) {
//         case 1 :
//             console.log('Monday');
//             break;
//         case 2 :
//             console.log('Tuesday');
//             break;
//         case 3 :
//             console.log('Wednesday');
//             break;
//         case 4 :
//             console.log('Thursday');
//             break;
//         case 5 :
//             console.log('Friday');
//             break;
//         case 6 :
//             console.log('Saturday');
//             break;
//         case 7 :
//             console.log('Sunday');
//             break;
//         default :
//             console.log('Такого дня тижня по номеру немає')
//     }
// }
//
// dayOfWeek(4);

// найбільше і найменше число зі строки

//highAndLow("4 5000 29 54 4 60 -214 700"). є функція вивести найбільше і найменше число
// let highAndLow = (arry) => {
//     let newArr = [];
//     let minMax = [];
//     arry = arry.split(' ');
//     for (let i = 0; i < arry.length; i++) {
//         newArr.push(parseInt(arry[i]));
//     }
//   newArr = newArr.sort((a, b) => a - b);
//     console.log(newArr);
//     minMax.push(newArr.shift());
//     minMax.push(newArr.pop());
// return minMax;
// }
// let result = highAndLow('4 5000 29 54 4 60 -214 700')
// console.log(result);

// отримання результатів через Api *** fetch()***

// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//     .then((value)=>{
//         return value.json()
//     })
//     .then((i)=>{
//         console.log(i)
//     })

//рекурсія

//Дано натуральное число n. Выведите все числа от 1 до n.
//
// let i = 1;
// let num = (n) => {
//     console.log(i);
//     i++;
//     if (i <= n) {
//         num(n);
//     }
// }
// num(15);

// робота з об'єктами ********** копіювання даних*******
//
// let user = {
//     name: "Andriy",
//     age: 20,
//     car: {
//         model: "lanos",
//         year: 2002
//     }
// }
//
//  Object.assign
// let userAndriy = Object.assign({}, user);
// userAndriy.age = 21;
// userAndriy.car.model = "tesla";
// console.log(user);
// console.log(userAndriy);
//
// переприсвоєння ( поганий варіант бо міняється всюди значення ---- мутація)
// let newUserAndriy = user;
// newUserAndriy.age = 22;
// console.log(user)
// console.log(newUserAndriy);
//
// копіювання через Json
// let ostap = JSON.parse(JSON.stringify(user));
// ostap.name = 'Ostap';
// ostap.car.year = 2007;
// ostap.skil = 'student';
// console.log(user);
// console.log(ostap);
//
// Object.create() створюємо нового юзера і додаємо дані вручну в іншиого
// let userTwo = Object.create(user);
// userTwo.name = user.name;
// userTwo.age = user.age;
// console.log(user);
// console.log(userTwo);
//
// Spread іншими словами диструктуризація
// let newUserNew = {...user}; // копіюємо юзера дані в іншиу змінну
// newUserNew.name = 'Ivan';
// newUserNew.surname = 'Kalnytskyi';
// newUserNew.car.model = "mercedes"
// console.log(user)
// console.log(newUserNew)
//
// камера і аудіо на сторінці
// const video = document.getElementById('videoWebCam');
// navigator.mediaDevices
//   .getUserMedia({ video: true, audio: true })
//   .then(videoStreat => {
//     console.log(videoStreat);
//
//     video.srcObject = videoStreat;
//
//     video.play()
//   });

// *************************** дз по методах масивів ************************8


//1) Створити масив з 5 чисел та:
//  a) відсортувати його від меншого до більшого.
// let arr = [2, 6, 1, 9, 3];
// arr.sort((a, b) => a - b);
// console.log(arr);
//  b) відсортувати його від більшого до меншого.
// let arr2 = [2, 6, 1, 9, 3];
// arr2.sort((a, b) => b - a);
// console.log(arr2);
//  c) Відфілтрувати числа які є кратними 3.
// let arr3 = [2, 6, 1, 9, 3];
// let rez = arr3.filter(value => !(value % 3));
// console.log(rez);
//  d) Відфілтрувати числа які є більшими за 10.
// let arr4 = [20, 6, 12, 9, 11];
// let filter = arr4.filter(value => value > 10);
// console.log(filter)
// //  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let arr5 = [20, 6, 12, 9, 11];
// arr5.forEach(value => document.write(value + " "));
// //  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let arr6 = [20, 6, 12, 9, 11];
// let mapXthree = arr6.map(value => value*3);
// console.log(mapXthree);
// //  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let arr7 = [20, 6, 12, 9, 1];
// let sum = arr7.reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(sum);
//

// 2) Створити масив з 5 стрічок та:
//  a) Відсортувати його в алфавітному порядку
// let str = ['ara', 'log', 'js', 'css', 'html'];
// str.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//     return -1;
// });
// console.log(str);
//  b) Відсортувати в зворотньому порядку
// let str2 = ['ara', 'log', 'js', 'css', 'html'];
// str2.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }
//     return -1;
// });
// console.log(str2);
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let str3 = ['araHrytsay', 'loger', 'js', 'css', 'html'];
// let filter = str3.filter(value => value.length > 4);
// console.log(filter);
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let str4 = ['araHrytsay', 'loger', 'js', 'css', 'html'];
// let newFirstWord = str4.map(value => `Sam says ${value}`);
// console.log(newFirstWord);

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a,b) => a.age - b.age);
// console.log(users);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     return -1;
// });
// console.log(users)

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let married = users.reduce((previousValue, currentValue) => {
//     if(currentValue.isMarried){
//         currentValue.house = true;
//     previousValue.push(currentValue);
//     }
// return previousValue;
// },[]);
// console.log(married);

const cars = [
   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
   {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
   {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
   {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
   {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
   {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
//
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let filter = cars.filter(value => value.volume > 3);
console.log(filter);
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//


// - взять слдующий массив
// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// -- Відсортувати їх по ID в зворотньому порядку
// -- Відсортувати по віку
// -- Відсортувати по віку в зворотньому порядку
// -- Відсорутвати по імені
// -- Відсорутвати по назві вулиці
// -- Відсорутвати по номеру будинку
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// -- Залишити тільки одружених
// -- Залишити тільки одружених, які молодні за 30
// -- Залишити лише тих, в кого парні номери будинків.
// -- Порахувати загальний вік всіх людей. (reduce)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
//
//
// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.



