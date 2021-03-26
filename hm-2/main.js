//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

/*
let arr_num = [1,3,5,6,7];
console.log(arr_num);
let arr_str = ['str', 'andrii', 'ivan', 'yura','hello'];
console.log(arr_str);
let arr_all = ['str', 22 , 'ivan', 'yura',true];
console.log(arr_all);
let arr = [];
arr[0] = 22;
arr[1] = 44;
arr[2] = 'hello';
console.log(arr);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let text = 'hello ok10';
for (let i = 0; i <10; i++){
    document.write(`<div> ${text} </div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let text = 'hello ok10';
for (let i = 0; i <=10; i++){
    document.write(`<div>` ${text} ${i} `</div>`);
}
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 let i = 1;
 while (i < 21){
     document.write(`<h1> hello okten </h1>`);
     i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 1;
while (i < 21){
    document.write(`<h1> hello okten  ${i} </h1>`);
    i++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr_2 = [110, 21, 3, 52, 47, 68, 8, 7, 11, 10];
for ( let i = 0; i<arr_2.length; i++){
    console.log(arr_2 [i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr_2 = ['str', 'hello', 'asdASD', 'DFADA', 'OK10', 'andrii', 'oleg', 'ivan', 'name_name', 'aaa'];
for ( let i = 0; i<arr_2.length; i++){
    console.log(arr_2 [i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr_2 = ['str', 22, 'asdASD', 5324, 'OK10', 'andrii', true, 'ivan', false, 'aaa'];
for ( let i = 0; i<arr_2.length; i++){
    console.log(arr_2[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr_2 = ['str', 22, 'asdASD', 5324, 'OK10', 'andrii', true, 'ivan', false, 'aaa'];
for ( let i = 0; i<arr_2.length; i++) {
    if (typeof arr_2[i] === "boolean") {
        console.log('boolen' + ' ' + arr_2[i]);
    } else if (typeof arr_2[i] === "number") {
        console.log('number' + ' ' +arr_2[i]);
    } else if (typeof arr_2[i] === "string") {
        console.log('string' + ' ' + arr_2[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr_test = [];
arr_test[0] = 22;
arr_test[1] = 44;
arr_test[2] = 'hello';
arr_test[3] = 'ok10';
arr_test[4] = 287;
arr_test[5] = 'hello';
arr_test[6] = false;
arr_test[7] = 'hello';
arr_test[8] = 2021;
arr_test[9] = true;
for(let i = 0; i< arr_test.length; i++) {
    console.log(arr_test[i]);
}

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i<11; i++){
    console.log(i);
    document.write(i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i<101; i++){
    console.log(i);
    document.write(i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i<101; i+=2){
    console.log(i);
    document.write(i + ' ');
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i<101; i++){
    if (i%2 === 0) {
        console.log(i);
        document.write(i + ' ');
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i<101; i++){
    if (i%2 === 0) {
        console.log(i);
        document.write(i + ' ');
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i<101; i++){
    if (i%2 !== 0) {
        console.log(i);
        document.write(i + ' ');
    }
}

//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let minute =0 ; minute < 2; minute++){
    for (let sec =0 ; sec < 60 ; sec++){
      console.log('Time: ' + minute + ':'+ sec)  ;
    }
}
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let h = 0; h < 2; h++) {
    for (let minute = 0; minute < 60; minute++){
        for (let sec = 0; sec < 60; sec++) {
            console.log('Time: ' + h + ':'+ minute + ':' + sec);
        }
    }
}

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
let str = '';
for (let i = 0; i < arr.length; i++) {
    str += arr[i]
}
console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
let str = '';
let i = 0;
while (i<3){
    str += arr[i]
    i++;
}
console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
let str = '';
for ( let arr_2 of arr){
    str += arr_2;
}
console.log(str);


//Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr = ['a', 'b', 'c'];
arr.push(1,2,3);
console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arr = [1 ,2, 3];
let arr_two = [];
for (let i=arr.length-1; i >= 0; i--){
    arr_two.push(arr[i]);
}
console.log(arr_two);
//---------------------або-------------------
let arr = [1 , 2, 3];
arr.reverse()
console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arr = [1 , 2 , 3];
arr.push(4,5,6);
console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let arr = [1 , 2 , 3];
arr.unshift(4,5,6)
console.log(arr);


// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arr = ['js' , 'css' ,'jq'];
let first_element =arr.shift(1)
console.log(first_element);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let arr = ['js' , 'css' ,'jq'];
let first_element =arr.pop(3)
console.log(first_element);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arr = [1 ,2 ,3 ,4 ,5];
let newArr = arr.slice(3)
console.log(newArr);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let arr = [1 ,2 ,3 ,4 ,5];
arr = arr.slice(0, 2);
console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let arr = [1 ,2 ,3 ,4 ,5];
arr.splice(1, 2);
console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr = [1 ,2 ,3 ,4 ,5];
arr.splice(3, 0 , 'a' , 'b' , 'c');
console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr = [1 ,2 ,3 ,4 ,5];
arr.splice(1, 0 , 'a' , 'b');
arr.splice(6, 0 , 'c');
arr.splice(8, 0 , 'e');
console.log(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr = [];
for (let i = 1; i<11; i++){
    if( i%2 === 0){
        console.log( 'Парні числа : '+i);
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let arr = [1,11,21,3,5,7,3,9,12,10];
let arr_copy = [];
for (let i = 0; i < arr.length; i++) {
    arr_copy.push(arr[i]);
}
console.log(arr_copy)


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr = [1,11,21,3,5,7,3,9,12,10];
for (let arr_copy of arr) {
    console.log(arr_copy);
}

//------------------------------------ДОП------------------------------------------
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr.length) {
    console.log(arr[i])
    i++;
}

// 2. перебрати його циклом for
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr.length) {
    if(i%2 !== 0) {
        console.log(arr[i])
    }
    i++;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i =0; i<arr.length; i++){
    if(i%2 !== 0) {
        console.log(arr[i])
    }
}

// перебрати циклом while та вивести  числа тільки парні  значення
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr.length) {
    if(arr[i]%2 ===0) {
        console.log(arr[i])
    }
    i++;
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i =0; i<arr.length; i++){
        if(arr[i]%2 ===0) {
            console.log(arr[i])
    }
}


// 7. замінити кожне число кратне 3 на слово "okten"
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let text = 'okten';
for(let i =0; i<arr.length; i++){
    if(arr[i] % 3 ===0) {
        arr[i] = text;
        console.log(arr);
    }
}


//вивести масив в зворотньому порядку.
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length-1; i >= 0; i--){
    console.log(arr[i])
}

//всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length-1;
while (i >= 0) {
    console.log(arr[i])
    i--;
}


let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i =arr.length - 1; i>=0; i--){
    console.log(arr[i]);
}


let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length - 1;
while (i >= 0) {
    if(i%2 !== 0) {
        console.log(arr[i])
    }
    i--;
}



let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = arr.length - 1; i >=0; i--){
    if(i%2 !== 0) {
        console.log(arr[i])
    }
}

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length - 1;
while (i >=0 ) {
    if(arr[i]%2 ===0) {
        console.log(arr[i])
    }
    i--;
}

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for(let i = arr.length-1; i>=0; i--){
    if(arr[i]%2 ===0) {
        console.log(arr[i]);
    }
}


let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let text = 'okten';
let i = arr.length - 1;
while (i >=0 ) {
    if(arr[i]%3 === 0) {
        arr[i] = text
    }
    console.log(arr[i])
        i--;
}


 let arr = [];
 for (let i = 0; i< 101; i++){
     if (i % 2 === 0) {
         arr = i;
         console.log(arr);
     }
 }



//створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for (let i = 0; i< 101; i++){
    if (i % 2 === 0) {
        arr.push(i);
    }
}
console.log(arr);


// 2. заповнити його 50 непарними числами за допомоги циклу.
let arr = [];
for (let i = 0; i< 101; i++){
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);

// используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * (732 - 8)));
}
console.log(arr);

// вывести на консоль  каждый третий елемент
    let arr = [1,2,3,4,5,6,7,8,9,10,11];
for(let i = 0; i<arr.length; i+=2){
       console.log(arr[i]);
}

// 3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.
let arr = [1,2,4,3,5,6,8,32,80,10,11];
for(let i = 0; i<arr.length; i+=2){
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

//вывести на консоль  каждый третий елемент  но при условии что он имеет парное значение и записать их в другой массив.
let arr = [1,2,4,3,5,6,8,32,80,10,11];
let arr_copy = [];
for(let i = 0; i<arr.length; i+=2){
    if (arr[i] % 2 === 0) {
        arr_copy.push(arr[i]);
    }
}
console.log(arr_copy);

//Вывести каждый елемент массива у которого соседний с права элемент - парный
let arr = [1,2,4,3,5,6,8,32,80,10,11];
for(let i = 0; i<arr.length; i++){
    if (arr[i+1] % 2 === 0) {
        console.log(arr[i]);
    }
}

 // масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let arr = [100,250,50,168,120,345,188];
let sum = 0;
for(let i = 0; i<arr.length; i++){
    sum +=arr[i] / arr.length;
}
console.log(sum);


//створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив
let arr = [];
let arr_two = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * (20 - 1)));
    arr_two.push(arr[i] * 5)
}
console.log(arr_two);



//створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
let arr = [100,'hello',true, 168,'ok10',345,'andrii'];
let arr_two = [];
for (let i = 0; i < arr.length-1; i++) {
    if(typeof arr[i] === "number"){
        arr_two.push(i);
    }
}
console.log(arr_two);
 */
