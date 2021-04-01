// створити функцію яка приймає масив та виводить його
// let arr = [1, 2, 4, 3, 6, 5];
//
// function arrArr(argArr) {
//     console.log(argArr);
// }
// arrArr(arr);

// створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попередню функцію
// let arr_2 = [];
// function arrRandom(x) {
//     for (let i = 0; i < 10; i++) {
//         arr_2.push(Math.round(Math.random() * 10 + 1));
//     }
//     console.log(x);
// }
//
// arrRandom(arr_2);
// arrArr(arr_2);

//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c) {
//     if (a <= b && a <= c) {
//         return a;
//     } else if (a >= c && b >= c) {
//         return c;
//     } else if (a >= b && b <= c) {
//         return b;
//     } else {
//         return 0;
//     }
// }
// let num_1 = +prompt('Enter num');
// let num_2 = +prompt('Enter num');
// let num_3 = +prompt('Enter num');
// console.log(min(num_1, num_2, num_3));

//створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (a < c && b < c) {
//         return c;
//     } else if (a < b && b > c) {
//         return b;
//     } else {
//         return 0;
//     }
// }
// let num1 = +prompt('Enter num');
// let num2 = +prompt('Enter num');
// let num3 = +prompt('Enter num');
// let maxValue = max(num1, num2, num3)
// console.log(maxValue);

//Створити функцію яка повертає найбільше число з масиву
// let maxValue = 0;
// function maxValueArr(arr = [1,2,47,865,143,73]) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         }
//     }
//     return maxValue;
// }
// let result = maxValueArr([1, 2, 3, 5, 1, 987654, 4596742312, 2134436]);
// console.log(result);

//створити функцію яка повертає найменьше число з масиву
// function minValueArr(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//          min = arr[i];
//         }
//     }
//     return min;
// }
// let result = minValueArr([2, 22, 23, 54, 1, 98, 45, 43]);
// console.log(result);

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumArray(arr2){
//     let sum = 0;
//     for (let i = 0; i < arr2.length; i++) {
//         sum+=arr2[i];
//     }
//     return sum;
// }
// let resultSum = sumArray([1,2,5,3,8]);
// console.log(resultSum);

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sumArray(arr2 = [1,2,43,32,11,5,6]){
//     let middle = 0;
//     for (let i = 0; i < arr2.length; i++) {
//         middle += arr2[i] / arr2.length;
//     }
//     return middle;
// }
// let resultSum = sumArray([1,2,3,4,5]);
// console.log(resultSum);

//Створити функцію яка приймає масив будь яких объектів,
// та повертає масив ключів всіх обєктів
// let keys = [];
// function objectArr (obj = [{name: 'Andrii' , year:20, car: 'Lanos'} ] ){
//     for (let allKeys of obj) {
//         for (let keysAll in allKeys) {
//             keys.push(keysAll);
//         }
//     }
//     return keys;
// }
// let result = objectArr([{name: 'Andrii' , year:20, car: 'Lanos'}, {fried: 'Ron' , list :20, car: 'Lambo'}])
// console.log(result);

//Створити функцію яка приймає масив будь яких объектів,
// та повертає масив значень всіх обєктів
// let keys = [];
//
// function objectArr(obj = [{name: 'Andrii', year: 20, car: 'Lanos'}]) {
//     for (let allKeys of obj) {
//         for (let keysAll in allKeys) {
//             keys.push(allKeys[keysAll]);
//         }
//     }
//     return keys;
// }
// let result = objectArr([{name: 'Andrii', year: 20, car: 'Lanos'}, {fried: 'Ron', list: 20, car: 'Lambo'}])
// console.log(result);

//Cтворити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// let arr = [];
// function sumId(arrOne,arrTwo) {
//     for (let i = 0; i < arrOne.length; i++) {
//         for (let j = 0; j < arrTwo.length; j++) {
//             if (i === j) {
//                 arr.push(arrOne[i]+arrTwo[j]);
//             }
//         }
//     }
//     return arr;
// }
// let res = sumId(arr1,arr2);
// console.log(res);

//створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let maxValue = 0;
// function allValue(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         } else if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log(maxValue);
//     return min;
// }
// let result = allValue([2, 4, 6, 1, 8]);
// console.log(result);

//Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let keys = [];
// let value = [];
// function objectArr(obj = [{name: 'Andrii', year: 20, car: 'Lanos'}]) {
//     let x = confirm('Keys?')
//     if (x === true) {
//         for (let allKeys of obj) {
//             for (let keysAll in allKeys) {
//                 keys.push(keysAll);
//             }
//         }
//         return keys;
//     } else {
//         for (let allKeys of obj) {
//             for (let keysAll in allKeys) {
//                 value.push(allKeys[keysAll]);
//             }
//         }
// return value;
//     }
// }
// let result = objectArr();
// console.log(result)

//Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [1,2,3,4,5];
// let changedI;
// function change (arry , k=2){
//     for (let i = 0; i < arry.length; i++) {
//       if(i === k){
//           changedI = arry[i];
//           arry[i] = arry[i+1];
//           arry[i+1] = changedI;
//       }
//     }
//     return arry;
// }
// let result = change(arr);
// console.log(result);

//Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень. Двожина масиву від 2 до 100
// let arr1=[1,0,6,0,3];
// function numbersInput (sortArr){
//     for (let i=sortArr.length-1; i>=0; i--){
//         if(sortArr[i] === 0){
//             sortArr.push(sortArr[i]);
//             sortArr.splice(i,1);
//         }
//     }
//    return sortArr;
// }
// let rez = numbersInput(arr1);
// console.log(rez);

//- Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = '    Harry      Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
// n1.trim();
// let name = '';
// let strArr = n1.split(' ');
// for (let i = 0; i < strArr.length; i++) {
//     let newBlocks = document.createElement('span');   // як варіант для ріщення xDD ;
//     document.body.appendChild(newBlocks);
//     if(strArr[i] !== ''){
//         name = newBlocks.innerText=`${strArr[i]} `
//     }
// }

