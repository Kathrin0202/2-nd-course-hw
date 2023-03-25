//Задание 1

const arr = [4, 6, 8, 1];

function getResult(arr, callback) {
    console.log(arr.reduce((a,b) => a + b, 0));
    callback();
};
getResult(arr, () => {
    console.log(arr.reduce((a,b) => a * b, 1));
});

//Задание 2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function getSortedArrayObj(c, d) { 
	if (c.age > d.age) return 1;
	if (c.age < d.age) return -1;
	return 0;
};
users.sort(getSortedArrayObj);
console.log(users);

//Задание 3
const massif = [6, 3, false, 2, 1];

function each(massif, next) {
    console.log(massif.reverse());
    next();
};
each(massif, () => {
	console.log(massif.filter(Boolean));
});

//Задание 4
const id = setInterval(() => console.log(new Date()), 1000);
setTimeout(() => {clearInterval(id); console.log('30 секунд прошло');}, 30000);

//Задание 5
function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(function talk() {
		console.log('Разговор')
    }, 1000);

console.log('Идут гудки...')
};

calling();
beeps();