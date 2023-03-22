//Задание 1
let strJs = 'js';
strJs = strJs.toUpperCase();

console.log(strJs);

//Задание 2
const searchStart = (['Кот', 'Корова', 'Рыба', 'Оса']);
const search = 'ко';

searchStart.forEach((searchStart) => {
    if (searchStart.toLowerCase().startsWith(search.toLowerCase())){
        console.log(Array(searchStart));
    }
});

//Задание 3
let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задание 5
function getRandom(minValue, maxValue) {
    return Math.round (Math.random() * (maxValue - minValue)) + minValue;
};

console.log(getRandom(1, 10));

//Задание 6
let max = 10;
let lenght = max / 2;
const getRandomArrNumbers = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );
const numbers = getRandomArrNumbers (lenght, max);

console.log(numbers);

//Задание 7
function getRandomNumber(minNum, maxNum) {
    return Math.round (Math.random() * (maxNum - minNum)) + minNum;
};

console.log(getRandomNumber(3, 13));

//Задание 8
let nowDate = new Date();

console.log(nowDate);

//Задание 9
let myDate = new Date();
let searchDate = myDate.setDate(myDate.getDate() + 73);
let daysIn73 = new Date(searchDate)
console.log(daysIn73);

//Задание 10
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь','Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let newDate = new Date();
let fullDate = 'Дата: ' + newDate.getDate() + ' ' + months[newDate.getMonth()] + ' ' + newDate.getFullYear() + '- это ' + days[myDate.getDay()];
console.log(fullDate);

let hour = newDate.getHours();
let minute = newDate.getMinutes();
let second = newDate.getSeconds();
if (minute < 10) {
	minute = '0' + minute;
};
if (second < 10) {
	second = '0' + second;
};
console.log('Время: ' + hour + ':' + minute + ':' + second);
