//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let areaText = document.getElementById('area');
//  areaText.oninput = () =>{
//      localStorage.setItem('textArea', areaText.value);
//  }
// let text = localStorage.getItem('textArea');
// areaText.innerHTML = text;

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
//
//******** Інтпут ****************************
// let input = document.getElementById('input');
// input.oninput = () => {
//     localStorage.setItem('inputTextArea', input.value);
// }
// let text = localStorage.getItem('inputTextArea');
// input.value = text;
//
//**** Чекбокс ****************************
//
// let checker = document.getElementById('checker');
// checker.onclick = () => {
//    localStorage.setItem('checkOrNo',checker.checked)
// }
// let checkResult = localStorage.getItem('checkOrNo');
// checker.checked = JSON.parse(checkResult);
//
//***Radio ****************************
//
// let radiOne = document.getElementById('radioOne');
// radiOne.onclick = () => {
//     localStorage.setItem('checkOrNoo',radiOne.checked)
// }
// let radioResult = localStorage.getItem('checkOrNoo');
// radiOne.checked = JSON.parse(radioResult );
//
// TextArea ****************************
//
// let areaTextTwo = document.getElementById('areaTwo');
//  areaTextTwo.oninput = () =>{
//      localStorage.setItem('textAreaTwo', areaTextTwo.value);
//  }
// let textTwo = localStorage.getItem('textAreaTwo');
// areaTextTwo.innerHTML = textTwo;
//
// Select ****************************
//
// let selectOne = document.getElementById('selectOne');
// selectOne.oninput = () =>{
//     localStorage.setItem('textSelector', selectOne.value);
// }
// let textSelector = localStorage.getItem('textSelector');
// selectOne.value = textSelector;

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по
// истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let areaThree = document.getElementById('areaThree');
// let continueButton = document.getElementById('continue');
// let arr = [];
// let wrapper = 0;
// continueButton.onclick = () => {
//     arr.push(areaThree.value);
//     localStorage.setItem('text', JSON.stringify(arr));
//     wrapper++;
// }
// let minus = document.getElementById('minus');
// minus.onclick = () => {
//     let parserText = JSON.parse(localStorage.getItem('text'));
//     if (wrapper - 1 >= 0) {
//         wrapper--;
//     } else {
//         wrapper = parserText.length - 1;
//     }
//     areaThree.value = parserText[wrapper];
// }
//
// let plus = document.getElementById('plus');
// plus.onclick = () => {
//     let parserText = JSON.parse(localStorage.getItem('text'));
//     if (wrapper + 1 < parserText.length) {
//         wrapper++;
//     } else {
//         wrapper = 0;
//     }
//     areaThree.value = parserText[wrapper];
// }

//Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.
// При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,
// которые уже заполнены данными объекта
//
let inputName = document.getElementById('inputName');
let inputSurname = document.getElementById('inputSurname');
let inputYear = document.getElementById('inputYear');
let buttonNotes = document.getElementById('buttonNotes');
let arr = [];
buttonNotes.onclick = (ev) => {
    ev.preventDefault();
    let user = {
        name: inputName.value,
        surname: inputSurname.value,
        year: inputYear.value
    };
    arr.push(user);
    localStorage.setItem('data', JSON.stringify(arr));
    let divDiv = document.createElement('div');
    let result = localStorage.getItem('data');

}
// не до кінця
