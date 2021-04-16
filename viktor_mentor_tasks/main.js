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

