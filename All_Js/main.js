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

//highAndLow("4 5000 29 54 4 60 -214 700"). є функція вивести найбільше і найменше число

// let  highAndLow = "4 5000 29 54 4 60 -214 700" ;

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





