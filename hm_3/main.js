/* отримує текст з параграфа з id "content"

let elementById = document.getElementById('content');
console.log(elementById.innerText);

 //Oтримує текст з блоку з id "rules"

let elementTwoById = document.getElementById('rules');
console.log(elementTwoById.innerText);

//  замініть текст параграфа з id 'content' на будь-який і
let newTextId = document.getElementById('content');
newTextId.innerText = 'hello my name is Andrii. I am 20';
console.log(newTextId)

//замініть текст параграфа з id 'rules' на будь-який інший
let newTextTwoId = document.getElementById('rules');
newTextTwoId.innerText = 'Карпати Львів виграли кубок СРСР у 1969 році';
console.log(newTextTwoId);

//змініть кожному елементу колір фону на червоний

let newBackgroundDiv = document.getElementsByTagName('div');
for (let i = 0; i < newBackgroundDiv.length; i++) {
    let newBackgroundDivElement = newBackgroundDiv[i];
    newBackgroundDivElement.style.backgroundColor = 'red';
}
let newBackgroundId = document.getElementsByTagName('p');
for (let i = 0; i < newBackgroundId.length; i++) {
    let newBackgroundIdElement = newBackgroundId[i];
    newBackgroundIdElement.style.backgroundColor = 'red';
}
let newBackgroundUl = document.getElementsByTagName('ul');
for (let i = 0; i < newBackgroundUl.length; i++) {
    let newBackgroundUlElement = newBackgroundUl[i];
    newBackgroundUlElement.style.backgroundColor = 'red';
}



//змініть кожному елементу колір тексту на синій
let newBackgroundDiv = document.getElementsByTagName('div');
for (let i = 0; i < newBackgroundDiv.length; i++) {
    let newBackgroundDivElement = newBackgroundDiv[i];
    newBackgroundDivElement.style.backgroundColor = 'blue';
}
let newBackgroundId = document.getElementsByTagName('p');
for (let i = 0; i < newBackgroundId.length; i++) {
    let newBackgroundIdElement = newBackgroundId[i];
    newBackgroundIdElement.style.backgroundColor = 'blue';
}
let newBackgroundUl = document.getElementsByTagName('ul');
for (let i = 0; i < newBackgroundUl.length; i++) {
    let newBackgroundUlElement = newBackgroundUl[i];
    newBackgroundUlElement.style.backgroundColor = 'blue';
}

//отримати весь список класів елемента з id=rules і вивести їх в console.log

let elementsId = document.getElementById('rules');
console.log(elementsId.classList);


// отримати всі елементи з класом fc_rules
 let elementsByClassName = document.getElementsByClassName('fc_rules');
for (let i = 0; i < elementsByClassName.length; i++) {
    let NameElement = elementsByClassName[i];
    console.log(NameElement);
}


//поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsByClassName = document.getElementsByClassName('fc_rules');
for (let i = 0; i < elementsByClassName.length; i++) {
    let nameElement = elementsByClassName[i];
    nameElement.style.backgroundColor = 'red';
}
*/

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

/*
За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
Вставити цей блок на сторінку
for (let i = 0; i < users.length; i++) {
    let Div = document.createElement('div');
    Div.innerText = `
    ${users[i].name} ${users[i].age}  ${users[i].status} ${users[i].address.city} ${users[i].address.country} ${users[i].address.street} ${users[i].address.houseNumber}
    `;
    document.body.appendChild(Div);
}
За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i < users.length; i++) {
    let Div = document.createElement('div');
    Div.style.backgroundColor = 'silver';
    Div.style.margin = '40px';
    Div.innerText = ` ${users[i].name} ${users[i].age}  ${users[i].status } `;

    let DivTwo = document.createElement('div');
    let divOne = document.createElement('div');
    divOne.innerText = `${users[i].address.city} `;
    let divTwo = document.createElement('div');
    divTwo.innerText = `${users[i].address.country}`;
    let divThree = document.createElement('div');
    divThree.innerText = `${users[i].address.street}`;
    let divFour = document.createElement('div');
    divFour.innerText = `${users[i].address.houseNumber} `;
    
    document.body.appendChild(Div);
    Div.appendChild(DivTwo);
    DivTwo.appendChild(divOne);
    DivTwo.appendChild(divTwo);
    DivTwo.appendChild(divThree);
    DivTwo.appendChild(divFour);

}
*/

