//Задание 1
const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++){
    if (number[i] == 10) break;
    console.log(number[i]);
};

//Задание 2
const numb = [1, 5, 4, 10, 0, 3];

numb.forEach((el, indexOf) => {
    if (el == 4)
    console.log(`${indexOf}: ${el}`);
});

//Задание 3
let num = [1, 3, 5, 10, 20];
num = num.join(' ');
console.log(num);

//Задание 4
let massif = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
console.log(Array(massif));

//Задание 5
let arr = [1, 1, 1];
arr.push (2, 2, 2);

console.log(arr);

//Задание 6
let solid = [9, 8, 7, 'a', 6, 5];
solid = solid.sort();

console.log(solid);
console.log (solid.pop());
console.log(solid);

//Задание 7
let user = Number(prompt('Введите число'));
let mas = [9, 8, 7, 6, 5];
let search = mas.includes(user);

console.log(search);

//Задание 8
let line = 'abcdef';
let lineReverse = line.split('').reverse().join('');
console.log(lineReverse);

//Задание 9
let type = [[1, 2, 3,],[4, 5, 6]];
console.log(Array(type.join(',')));

//Задание 10
let sum = [3, 5, 6];
let result = 0;

for (let y = 0; y <= sum.length - 1; y++){
    if (y == 2) break;
    console.log(sum[y] + sum[y+1]);
};

//Задание 11
const square = [6, 7, 8];
let res = square.map(item => (item ** 2));
console.log(res);

//Задание 12
let lengthWords = ['привет', '', 'па', 'Как у вас дела', 'л'];
let getLengthWords = lengthWords.map(function(count) {
    return count.length;
});
console.log(getLengthWords);

//Задание 13
const negative = [4, 5, 7, -9, -6, 8, -1];
let resul = negative.filter(ite => ite <= 0);
console.log(resul);

//Задание 14
const getRandom = (leng, max) => (
    [...new Array(leng)]
    .map(() => Math.round(Math.random() * max))
);
let r = getRandom(10, 10);

for (let r = 0; r <= 10; r++)
 if (r % 2 == 0){
    console.log(r);
 };

 //Задание 15
 const getRandomInt = (lenght, max) => (
    [...new Array(lenght)]
    .map(() => Math.round(Math.random() * max))
);
let a = getRandomInt(6, 10);

for (let x = 0; x <= getRandomInt.length; x++){
    if (a != 0)
 console.log((a[x] + a[x+1]) / getRandomInt.length);
};