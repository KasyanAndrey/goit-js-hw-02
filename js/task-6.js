"use strict";

const numbers = [];
let input;
let total = 0;

do {
    input = prompt('необходимо ввести число');

    if(input !== null) {
        numbers.push(input);
    }

    if(isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        input = prompt('необходимо ввести число');    
    }

} while(input > 0);

if(numbers.length) {
    for(const number of numbers) {
        total += +number;
    }
}
console.log(`Общая сумма чисел равна ${total}`);