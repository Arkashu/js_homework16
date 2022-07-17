'use strict'
let num = +prompt('Введите любое число');
if (num <= 1 || isNaN(num)){
    console.log(NaN)
} else {
    for (let i = 2; i <= num ; i++) {
        if (num % i === 0){
            console.log(i);
            break;
        } else if (i === num){
            console.log(num)
        }
    }
}

