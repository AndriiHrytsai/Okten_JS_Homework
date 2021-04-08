/*
//1) Створити масив з 20 чисел та:
let arr = [1, 3, 7, 2, 9, 22, 45, 3, 4, 6, 9, 2, 10, 14, 17, 29, 30, 21, 35, 0]
//  a) відсортувати його від меншого до більшого.
arr.sort((a, b) => a - b);
console.log(arr);
//  b) відсортувати його від більшого до меншого.
arr.sort((a, b) => b - a)
console.log(arr)
//  c) Відфілтрувати числа які є кратними 3.
let numPerThree = arr.filter(value => value % 3 === 0);
console.log(numPerThree);
//  d) Відфілтрувати числа які є більшими за 10.
let numTen = arr.filter(value => value > 10);
console.log(numTen);
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
arr.forEach((value) => {
    document.write(value + " ");
});
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
let maper = arr.map(value => value * 3);
console.log(maper);
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
let sum = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
})
console.log(sum);
 */

/*
//2) Створити масив з 20 стрічок та:
let str = ['ssa', 'asd', 'vgvvv', 'asf75i', 'sadsa', 'asd', 'vhelbsv', 'asfdsoi',
    'sambdava', 'asd', 'bye', 'ok10', 'asi', 's', 'a', 'kitty', 'Andrii',]
//  a) Відсортувати його в алфавітному порядку
let stringi = str.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        return  -1;
    }
);
console.log(stringi)
//  b) Відсортувати в зворотньому порядку
let stringiTwo = str.sort((a, b) => {
        if (a < b) {
            return 1;
        }
        return  -1;
    }
);
console.log(stringiTwo)
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let stringsName = str.filter(value => value.length > 4);
console.log(stringsName);
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
str.forEach(value => {
    document.write(`Sam says ${value} <br>`);
});
 */


// //3) Все робити тільки за допомогою методів масивів!
// // Дано масив :
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
//  ];
// // a) відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1;
//     }
//     return -1;
// });
// console.log(users);
//
// // відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1;
//     }
//     return -1;
// });
// console.log(users);
//
// //пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// //    та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let usersId = users.map((value, index) =>{
//         value.id = index + 1;
//         return value
// });
// console.log(usersId)
//
// //відсортувати його за індентифікатором
// usersId.sort((a, b) => a.id - b.id)
// console.log(usersId)
//
// //Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
// // let x = users.reduce((previous, currentValue) => {
//  if (p)
//  });
// // console.log(x)  не знаю


//************************************************ Для аудиторії **********************************************

/*
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

//Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let carSort = cars.filter(a => a.volume > 3);
console.log(carSort)
// - двигун = 2л
let carSortTwo = cars.filter(a => a.volume === 3);
console.log(carSortTwo)
// - виробник мерс
let carSortName = cars.filter(a => a.producer === 'mercedes');
console.log(carSortName)
// - двигун більше 3х літрів + виробник мерседес
let carSortNameVolume = cars.filter(a => a.volume > 3 && a.producer === 'mercedes');
console.log(carSortNameVolume)
// - двигун більше 3х літрів + виробник субару
let carSortNameVolumeTwo = cars.filter(a => a.volume > 3 && a.producer === 'subaru');
console.log(carSortNameVolumeTwo)
// - сили більше ніж 300
let power = cars.filter(a => a.power > 300);
console.log(power);
// - сили більше ніж 300 + виробник субару
let powerName = cars.filter(a => a.power > 300 && a.producer === 'subaru');
console.log(powerName);
// - мотор серіі ej
let engineSeries = cars.filter(a => a.engine.startsWith('ej'));
console.log(engineSeries);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let engineSeriesName = cars.filter(a => a.engine.startsWith('ej') && a.producer === 'subaru'&& a.power > 300 );
console.log(engineSeriesName);
// - двигун меньше 3х літрів + виробник мерседес
let carSortNameVolumeThree = cars.filter(a => a.volume < 3 && a.producer === 'mercedes');
console.log(carSortNameVolumeThree);
// - двигун більше 2л + сили більше 250
let powerVolume = cars.filter(a => a.power > 200 && a.volume > 2);
console.log(powerVolume);
// - сили більше 250  + виробник бмв
let powerNameTwo = cars.filter(a => a.power > 250 && a.producer === 'bmw');
console.log(powerNameTwo);
 */

//- взять слдующий массив
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
//];
// // -- Відсортувати їх по ID
// let sortOne = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sortOne);
// // -- Відсортувати їх по ID в зворотньому порядку
// let sortTwo = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sortTwo);
// // -- Відсортувати по віку
// let sortThree = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sortThree);
// // -- Відсортувати по віку в зворотньому порядку
// let sortFour = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sortFour);
// -- Відсорутвати по імені
// let sortName = usersWithAddress.sort((a, b) => {
//     if(a.name > b.name){
//         return 1;
//     }
//     return -1;
//     }
// );
// console.log(sortName);
// // -- Відсорутвати по назві вулиці
// let sortStreet = usersWithAddress.sort((a, b) => {
//         if(a.address.street > b.address.street){
//             return 1;
//         }
//         return -1;
//     }
// );
// console.log(sortStreet);
// // -- Відсорутвати по номеру будинку
// let sortNumHouse = usersWithAddress.sort((a, b) => {
//         if(a.address.number > b.address.number){
//             return 1;
//         }
//         return -1;
//     }
// );
// console.log(sortNumHouse);
// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let yungPeople = usersWithAddress.filter(value => value.age < 30);
// console.log(yungPeople)
// // -- Залишити тільки одружених
// let marriedPeople = usersWithAddress.filter(value => value.isMarried);
// console.log(marriedPeople)
// // -- Залишити тільки одружених, які молодні за 30
// let marriedAgePeople = usersWithAddress.filter(value => value.isMarried && value.age < 30);
// console.log(marriedAgePeople)
// // -- Залишити лише тих, в кого парні номери будинків.
// let allPeople = usersWithAddress.filter(value => !(value.address.number % 2));
// console.log(allPeople)
// // -- Порахувати загальний вік всіх людей. (reduce)
// let allAge = usersWithAddress.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.age;
// } ,0);
// console.log(allAge)
// // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let person = usersWithAddress.reduce((marry, marryAge) => {
//     if(marryAge.isMarried && marryAge.age >30){
//         marryAge.child = true;
//        marry.push(marryAge);
//     }
//     return marry;
// },[]);
// console.log(person);

//************************************************ Додаткове **************************************************

//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі