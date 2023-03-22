function seasons() {
    let monthNumber = Number(prompt('Введите номер месяца'));
if (monthNumber == 12 || monthNumber >= 1 && monthNumber <= 2) {
    console.log ('Зима');
} else if (monthNumber >= 3 && monthNumber <= 5) {
    console.log ('Весна');
} else if (monthNumber >= 6 && monthNumber <= 8) {
    console.log ('Лето');
} else if (monthNumber >= 9 && monthNumber <= 11) {
    console.log ('Осень');
} else {
    console.log ('Такого месяца нет');
}
};

function word() {
let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
let arrSort = arr.sort(() => Math.random() - 0.5);
let answer = alert(arrSort);
let firstAsk = prompt('Чему равняется первый элемент массива?');
let endAsk = prompt('Чему равняется последний элемент массива?');
if (arrSort.includes(firstAsk) && arrSort.includes(endAsk)) {
    alert('Молодец!');
} else if (arrSort.includes(firstAsk) || arrSort.includes(endAsk)) {
    alert('Вы были близки к победе');
} else {
    alert('Вы ответили неверно');
}
};
