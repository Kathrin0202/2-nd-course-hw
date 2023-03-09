/*Задание 1*/
let password = 'pass';
let enterPassword = prompt('Введите пароль');

if (enterPassword == password){
    alert ('Пароль введен верно')
} else{
    alert ('Пароль введен неправильно')
}

/*Задание 2*/
let c = Number(prompt('Введите число'));

if (c>0 && c<10) {
    console.log ('Верно')
} else {
    console.log ('Неверно')
}

/*Задание 3*/
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

if ( d>100 || e>100) {
    console.log ('Верно')
} else {
    console.log ('Неверно')
}

/*Задание 4*/
let a = Number('2');
let b = Number('3');
alert (a+b);

/*Задание 5*/
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
        console.log('Зима')
        break;
    case 2:
        console.log('Зима')  
        break;
    case 3:
        console.log('Весна')  
        break;
    case 4:
        console.log('Весна')  
        break;
    case 5:
        console.log('Весна')  
        break;
    case 6:
        console.log('Лето')
        break;
    case 7:
        console.log('Лето')  
        break;
    case 8:
        console.log('Лето')  
        break;
    case 9:
        console.log('Осень')  
        break;
    case 10:
        console.log('Осень')  
        break;
    case 11:
        console.log('Осень')  
        break;
    case 12:
        console.log('Зима')  
        break;
    default:
        console.log('Такого месяца нет')
        break;
}

/*Задание 7*/

let number = Number(prompt('Пожалуйста, введите любое число'));
console.log (number);

if (number%3) {
    alert('Число четное');
} else {
    alert ('Число нечетное');
}

/*Задание 8*/
let clientOS = (prompt('Укажите операционную систему'));

let android = 1;
let ios = 0;

if (android) {
    console.log('Установите версию приложения для Android по ссылке')
} else {
    console.log('Установите версию приложения для iOS по ссылке');
}
/*Задание 9*/
let clientDeviceOS = Number(prompt('Укажите операционную систему'));
let clientDeviceYear = Number(prompt('Укажите год операционной системы'));
let year = Number(2015);
let androidOS = 1;
let iosOS = 0;

if (clientDeviceOS === androidOS && clientDeviceYear < year){
    console.log('Установите облегченную версию приложения для по Android ссылке');
} else if (clientDeviceOS === iosOS && clientDeviceYear < year) {
    console.log('Установите облегченную версию приложения для по iOS ссылке');
} else if (clientDeviceOS === androidOS && clientDeviceYear > year) {
    console.log('Установите версию приложения для Android по ссылке');
} else{
    console.log('Установите версию приложения для iOS по ссылке');
}
