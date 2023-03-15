//Задание 1
function min(a, b){
    let min = a < b ? a : b;
    console.log (`Наименьшее значение ${min}`);
}

min (8, 4);
min (6, 6);

//Задание 2
function value(n) {
    let value = n % 2 == 0 ? 'Число четное' : 'Число нечетное';
    console.log (value);
}

value (3);
value (4);

//Задание 3
function square(х) {
    let square = х ** 2
    console.log (square);
}

square(5);

function returnSquare(y) {
    return y ** 2  
}

console.log (returnSquare(6));

//Задание 4
let userAge = prompt('Сколько вам лет?');

 if (userAge < 0) {
    function message() {
        alert('Вы ввели неправильное значение');
    }
 } 
 else if (userAge > 0 && userAge <= 12) {
    function message() {
        alert('Привет, друг!');
    }
} else {
    function message() {
        alert('Добро пожаловать!');
    }
 }

 message();
 
//Задание 5
function multi(c, d) {
    if (isNaN(c) || isNaN(d)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(c * d);
    }
}

multi(6, 8);
multi(9, 'k');

//Задание 6

let question = Number(prompt('Введите число'));
let userAnswer = question ** 3;

function answer(){
if (question) {
        alert (`${question} в кубе равняется ${userAnswer}`);
} else if (isNaN(question)){
       alert ('Переданный параметр не является числом');
    }
}
answer();


//Задание 7
const radius = 5;

function getArea(radius) {
    return 3.14 * (radius ** 2);
}

function getPerimeter(radius) {
    return 2 * 3.14 * radius;
}

console.log (getArea(radius));
console.log (getPerimeter(radius));


