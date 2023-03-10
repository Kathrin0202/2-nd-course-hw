/*Задание 1*/
let hello= 1;
while(hello <= 2) {
    console.log('Привет!');
    hello++;
};

/*Задание 2*/
let number = 1;
while(number <= 5) {
    console.log(number); 
    number++;
};

/*Задание 3*/
let i = 7;
while(i <= 22) {
    console.log(i); 
    i++;
};

/*Задание 4*/
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};
for (let key in obj) {
        console.log(`${key} - зарплата ${obj[key]} долларов.`);
};
/*Задание 5*/
let n = 1000;
let num = 0;
while (n > 50){
    n /= 2;
    if(n >= 50){
    continue;
}
num += n;
}
console.log (num);

/*Задание 6*/
for (let Friday = 1; Friday <=31; Friday++){
    if (Friday % 7 === 0){
        console.log(`Сегодня пятница, ${Friday}-е число. Необходимо подготовить отчет.`);
    }
};
