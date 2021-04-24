//написати прогу яка вибирає зі строки числа і виводить їх
// так як вони написані наприклад:
//   const st = 'as 23 fdf25dg544 34s5 5'
//   23, 25,544, 34, 5,5  вивело в консолі
//
// let arr = [];
// let str = 'as 23 fdf25dg544 34s5 5';
// str = str.replaceAll(/[a-z]/g, ' ')
// str = str.replace(/\s+/g, ' ').trim();
//
// console.log(str);
//
// str = str.split(' ');
// for (let i = 0; i < str.length; i++) {
//     let x = parseInt(str[i])
//     arr.push(x)
// }
// console.log(arr);

// Точная степень двойки.  Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// let searchTwo = (num = +prompt("Enter a number")) => {
//     do {
//         if (num % 2 !== 0) {
//             return "NO";
//         }
//         num /= 2;
//     } while (num >= 2)
//     return "Yes";
// }
// console.log(searchTwo());

// Комп'ютер апгрейд
// class Computer {
//     constructor(name, ram, cpu) {
//         this.name = name;
//         this.ram = ram;
//         this.cpu = cpu;
//     }
//     onOff(){
//         let pcOn = confirm('Комп вкл?');
//     if(pcOn){
//         console.log('Комп включений');
//     }
//     else {
//         console.log('Включи комп');
//
//     }
//     }
// }
//
// class Laptop extends Computer {
//     constructor(name, ram, cpu, monitor) {
//         super(name, ram, cpu);
//         this.monitor = monitor;
//     }
// onOff() {
//     super.onOff();
// }
//     battery() {
//         console.log(`Battery life =  ${this.cpu / (this.monitor * this.ram)} `);
//     }
// }
//
// class ultraBook extends Laptop {
//     constructor(name, ram, cpu, monitor, wag) {
//         super(name, ram, cpu, monitor);
//         this.wag = wag;
//     }
//
//     turnOn() {
//         if (this.wag > 2 && this.battery < 4) {
//             console.log('комп викл');
//         } else {
//             console.log('Hello world');
//
//         }
//     }
// }
//
// let lenovo = new ultraBook('lenovo', 8, 450, 14, true, 1.5);
// lenovo.turnOn();
// lenovo.battery()
//
// class MyGamePc extends Computer {
//     constructor(name, ram, cpu) {
//         super(name, ram, cpu);
//         this.fps = cpu / ram;
//     }
//
//     gameMethod(gameName = ' GTA') {
//         console.log(`You are playing ${gameName} with ${this.fps} FSP`)
//     }
//
//     upgradeCpu(maxValueCpu) {
//         if (maxValueCpu <= this.cpu * 0.1) {
//             this.cpu += maxValueCpu;
//             console.log(`New CPU is ${this.cpu}`);
//         } else {
//             console.log(`Stara ${this.cpu}`)
//         }
//     }
//
//     upgradeRam(maxValueRam) {
//         if (maxValueRam === 2) {
//             this.ram *= maxValueRam;
//             console.log(`New Ram is ${this.ram}`);
//         } else {
//             return 0;
//         }
//     }
// }
//
// let gaga = new MyGamePc('gaga', 8, 700, 15.6, 'GTA');
// gaga.gameMethod('Call of Duty');
// gaga.upgradeCpu(71);
// gaga.upgradeRam(2);
//
// class GamePc extends MyGamePc {
//     constructor(name, ram, cpu) {
//         super(name, ram, cpu);
//         this.fps = this.fps * 2;
//     }
//     playGame() {
//         this.cpu -= this.cpu * 0.001;
//         console.log(`Гра запустилась та потужність процесора ${this.cpu}`)
//     }
//     pcAbout() {
//         if(this.cpu < 500 && this.ram < 8) {
//             console.log('EROR !!!!!! Відро')
//         }
//         else{
//             console.log('Включай гру');
//         }
//     }
// }
//  let user = new GamePc('Hp', 7,502,true);
// user.onOff();
// user.playGame();
// user.pcAbout();

//Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
// let str = 'Alla';
// let str_two = 'Andrii'
// str = str.toLowerCase();
// let polindrom = string => {
//     let x = string.split("").reverse().join("");
//     if (x === str) {
//         console.log(x)
//         console.log('YES')
//     } else {
//         console.log(x)
//         console.log('no');
//     }
//     return x;
// }
// polindrom(str);
// polindrom(str_two);

//Знайти набільший елемент в масиві за допомогою reduce
// let arr = [1,6,9,0,17,88,4,7] ;
// let maxValue = arr.reduce((previousValue, currentValue) => {
//     if(previousValue < currentValue){
//         return currentValue
//     }
//     return  previousValue;
// });
// console.log(maxValue);

//Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
// EXIT | AXET -> false
// GOOD | DOGO -> true
//
// function anagram(firstWord, secondWord){
//     let result = firstWord.split("").sort().join("") === secondWord.split("").sort().join("");
//     console.log(result);
//     return result;
// }
// anagram('exit' , 'tixe');

// сделай функцию калькулятор которая будет принимить числа а и б и колбек
//  в зависимости какой колбек то такое и действие
//
//function calculator(a, b, cb) {
//    cb(a, b)
//}
//
//calculator(4, 6, function (left, right) {
//   console.log(left + right);
//});

//Напиши функцію flatten() для сплющування вкладених масивів.
// let arr = [3, 5, [7], [1, [[22]], [[6], 3]]];
// let flatten = (arry) =>  arry = arry.flat(Number.MAX_VALUE);
// console.log(flatten(arr));

//Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//******************************** Мій варіант ********************************
// let arr = 'hello';
// const machine = (arry) => {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(arry);
//             }, Math.random() * (1000 - 100));
//         }
//     )
// }
//
// async function randHello(mass) {
//     try {
//         for (let i = 0; i < mass.length; i++) {
//             let rezOne = await machine(arr[i]);
//             console.log(rezOne);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// randHello(arr);
//********************************** Ментора *********************************
// const printCh = (ch) => new Promise(resolve => setTimeout(() => resolve(ch), Math.random() * 1000))
//
// const typeWriter = async (str) => {
//     for (let ch of str) {
//         console.log(await printCh(ch));
//     }
// }
// typeWriter('Hello world')

//задание на асинхронность... подобно тому же заданию что и было на домашку....
// задание называется "остаться в живых"
// на начало дня у человека есть определенное количество энергии, пускай 1000
// - человек проснулся потратил определенное количество энергии
// - поел получил дополнительную энергию
// - пошел на работу потратил енергию
// и так придумать пунктов 10
// на каждом шаге если энергия дошла до 0 то вывести сообщение к примеру "Вы умерли по пути на работу"
//
//
// let energ = 1000;
//
// function wakeUp(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('Ти прокинувся і у тебе ');
//             energy -= 100;
//             cb(null, energy);
//         } else {
//             cb('помер');
//         }
//     }, 300)
// }
//
//
// function brushTeeth(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('Ти почистив зуби  і у тебе залишилось');
//             energy -= 100;
//             cb(null, energy);
//         } else {
//             cb('помер');
//         }
//     }, 300)
// }
//
// function cupOfTea(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('Випив чаю та енергії стало ');
//             energy -= 50;
//             cb(null, energy);
//         } else {
//             cb('помер')
//         }
//     }, 800)
// }
//
// function goStudy(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('Сідаю вчитись ');
//             energy -= 400;
//             cb(null, energy);
//         } else {
//             cb('Нема анергії, помер!!!')
//         }
//     }, 500)
// }
//
// function pererva(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('відпочинок і у тебе ');
//             energy += 100;
//             cb(null, energy);
//         } else {
//             cb('Нема анергії, помер!!!')
//         }
//     }, 500)
// }
//
// function walk(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('Піду трішки пройдусь');
//             energy -= 300;
//             cb(null, energy);
//         } else {
//             cb('мертвий ')
//         }
//     }, 200)
// }
//
// function eat(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('Смачного');
//             energy += 150;
//             cb(null, energy);
//         } else {
//             cb('такого більше немає ! помер')
//         }
//     }, 700)
// }
//
// function watchFilm(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log(' Подивлюсь собі Форсаж');
//             energy -= 10;
//             cb(null, energy);
//         } else {
//             cb(' помер ')
//         }
//     }, 700)
// }
//
// function gameWithGirl(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             console.log('18+ !!!!');
//             energy -= 200;
//             cb(null, energy);
//         } else {
//             cb('Помер трагічно')
//         }
//     }, 700)
// }
//
// function sleep(energy, cb) {
//     setTimeout(() => {
//         if (energy > 0) {
//             cb(null, 'Пора спати ');
//         } else {
//             cb('помер під час с***у');
//         }
//     }, 600)
// }
//
//
// wakeUp(energ, ((err, energa) => {
//     if (!err) {
//         console.log(energa);
//         brushTeeth(energa, ((err, enrgi) => {
//             if (!err) {
//                 console.log(enrgi);
//                 cupOfTea(enrgi, (err, enrgi) => {
//                     if (!err) {
//                         console.log(enrgi);
//                         goStudy(enrgi, (err, enrgi) => {
//                             if (!err) {
//                                 console.log(enrgi);
//                                 pererva(enrgi, (err, enrgi) => {
//                                     if (!err) {
//                                         console.log(enrgi);
//                                         walk(enrgi, (err, enrgi) => {
//                                             if (!err) {
//                                                 console.log(enrgi);
//                                                 eat(enrgi, ((err, enrgi) => {
//                                                     if (!err) {
//                                                         console.log(enrgi);
//                                                         watchFilm(enrgi, ((err, enrgi) => {
//                                                             if (!err) {
//                                                                 console.log(enrgi);
//                                                                 gameWithGirl(enrgi, ((err, enrgi) => {
//                                                                     if (!err) {
//                                                                         console.log(enrgi);
//                                                                         sleep(enrgi, ((err, enrgi) => {
//                                                                             if (!err) {
//                                                                                 console.log(enrgi);
//                                                                             } else {
//                                                                                 console.warn(err);
//                                                                             }
//                                                                         }))
//                                                                     } else {
//                                                                         console.warn(err);
//                                                                     }
//                                                                 }))
//                                                             } else {
//                                                                 console.warn(err);
//                                                             }
//                                                         }))
//                                                     } else {
//                                                         console.warn(err);
//                                                     }
//                                                 }))
//                                             } else {
//                                                 console.warn(err);
//                                             }
//                                         })
//                                     } else {
//                                         console.warn(err);
//                                     }
//                                 })
//                             } else {
//                                 console.warn(err)
//                             }
//                         })
//                     } else {
//                         console.warn(err);
//                     }
//                 })
//             } else {
//                 console.warn(err);
//             }
//         }));
//     } else {
//         console.warn(err);
//
//     }
// }))

//Отримати масив лише унікальних значень за допомогою reduce
// [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]
// let arr = [1, 9, 0, 1, 5, 9, 1, 6];
//
// let unic = arr.reduce((previousValue, currentValue) => {
//     if (!previousValue.includes(currentValue)) {
//         previousValue.push(currentValue)
//     }
//     return previousValue;
// }, [])
// console.log(unic)

//  телефонний номер
// function createPhoneNumber(numbers){
//     let num_format = "(***) ***-****"
//     for (let i = 0; i < numbers.length; i++) {
//         num_format = num_format.replace('*', numbers[i]);
//     }
//     return num_format;
// }
//
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// корінь квадратний для попереднього і квадрат наступного
// function findNextSquare(sq) {
//     let x = Math.sqrt(sq);
//     if (!(x % 1)) {
//         return Math.pow(x + 1, 2);
//     }
//     return -1;
// }
//
// console.log(findNextSquare(121));

// кратне 3 і 5
// function solution(number) {
//     let total = 0;
//     for (let i = 0; i < number; i++)
//     {
//         if (i % 3 === 0 || i % 5 === 0)
//         {
//             total += i;
//         }
//     }
//     return total;
// }
//
// console.log(solution(10))

//CamelCases
// String.prototype.camelCase = function () {
//     return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
//
// };
// console.log('andriy hrytsay tr'.camelCase());

//CamelCases розділити
// function solution(string) {
// if(typeof string !== "string"){
//     return '';
// }
// string =string.replace(/([A-Z]+)/g, ` $1`)
// return  string;
// }
//
// console.log(solution('kajsjhdAalkadnkNakasmd'));

// перші букви слова з великої
// let toWeirdCase = (s) => {
//     let arr = [];
//     s = s.split(' ');
//     console.log(s);
//     for (let i = 0; i < s.length; i++) {
//         let str = '';
//         for (let j = 0; j < s[i].length; j++) {
//             if (j % 2 === 0) {
//                 str += s[i].charAt(j).toUpperCase();
//             } else {
//                 str += s[i].charAt(j).toLowerCase();
//             }
//         }
//         arr.push(str);
//     }
//     return arr.join(' ');
// }
// console.log(toWeirdCase('ana robot'));











