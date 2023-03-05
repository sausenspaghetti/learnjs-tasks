// https://learn.javascript.ru/prototype-inheritance#pochemu-naedayutsya-oba-homyaka
'use strict';

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};
  
let speedy = {
    __proto__: hamster,
    stomach: []         // Дали каждому хомяку по отдельному животу
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// А этот нет 
console.log( lazy.stomach ); // apple