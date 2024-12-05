// let Name = "Варя";
// let Age = 19;
// alert(`Здравствуйте ${Name}, вам ${Age}`);
// console.log(Name, Age);
// if (Age >= 18) {
//     alert(`Вы совершеннолетний`);
// }
// else {
//     alert(`Вы несовершеннолетний`);
// }

// let x = Math.floor(Math.random() * 10) + 1;
// let guess = prompt("Введите число от 1 до 10");
// if (x == guess){
//     alert(`Поздравляем! Вы угадали число!`);
// }
// else {
//     if (guess < 5) {
//         alert(`Число меньше 5`);
//     }
//     else if (guess == 5) {
//         alert(`Число равно 5`);
//     }
//     else {
//         alert(`Число больше 5`);
//     }
// }
// const x = 12345;
// let password = prompt(`Введите пароль`);


// if (password == x && password != null) {
//     alert(`Доступ разрешен`);
// }
// else if (password == null || password == "") {
//     alert(`Пароль не введён`);
// }
// else {
//     alert(`Доступ запрещен`);
// }
// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// let oper = prompt("Введите операцию  (+, -, *, /) ");

// switch(oper){
//     case "+":
//         alert(a + b);
//         break;
//     case "-":
//         alert(a - b);
//         break;
//     case "*":
//         alert(a * b);
//         break;
//     case "/":
//         alert(a / b);
//         break;
//     default:
//         alert(`Неверная операция`);
// }

// for(let i = 1; i < 11; i++) {
//     console.log(i);
// }
// let k = 10;
// while(k > 0) {
//     console.log(k);
//     k--;
// }
// const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
// const practices = ['Практика 1', 'Практика 2', 'Практика 3']; 
// lectures.push('Тема 4');
// practices.push('Практика 4');

// lectures.forEach((lecture) => {
//     console.log(lecture);
// })

// practices.forEach((practice) => {
//     console.log(practice);
// })

// function printArray(a) {
//     a.forEach((i) => {
//         console.log(i + ",");
//     })
// }
// printArray(lectures);

function find(arr) {
    let l = arr.length;
    let newArr = [];
    for (let i = 0; i < l; i++) {
        if (arr[i][0] == "О"){
            newArr.push(arr[i]);
        }
    }
    return newArr
}

let arr = ['Основы', 'Углубленное', 'Основы', 'Адаптивная', 'Bootstrap', 'Основы', 'Работа', 'Введение'];
console.log(find(arr));