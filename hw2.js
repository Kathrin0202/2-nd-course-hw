/*Задание 1*/
let a= 20;
alert(a);

/*Задание 2*/
let firstIphone= 2007;
alert(firstIphone);

/*Задание 3*/
let nameCreator= alert ('Brendan Eich');

/*Задание 4*/
let x= 10;
let y=2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);

/*Задание 5*/
let result= 2**5;
alert(result);

/*Задание 6*/
let c=9;
let b=2;
let modulo = alert (c%b);

/*Задание 7*/
let num= 1;
num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;
alert(num);

/*Задание 8*/
let age= prompt('Сколько Вам лет?');
alert (age);

/*Задание 9*/
const user = {
    name: 'Kate',
    age: 20,
    isAdmin: Boolean(true),
}
let info = prompt('Какую информацию хотите узнать о пользователе?', "name", "age", "isAdmin");
alert(user[info]);

/*Задание 10*/
let userName= prompt('Как тебя зовут?');
alert(`Привет ${userName} !`);