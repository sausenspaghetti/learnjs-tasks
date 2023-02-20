// https://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth
'use strict';

function camelize(str) {
    let arr = str.split('-');
    let res = arr.map((word, index) => {
        return (index > 0 && word != '') ? (word[0].toUpperCase() + word.slice(1)) : word;
    });
    return res.join('');
}

console.log( camelize("background-color") == 'backgroundColor');
console.log( camelize("list-style-image") == 'listStyleImage' );
console.log( camelize("-webkit-transition") == 'WebkitTransition' );
console.log( camelize("t-a-z") == 'tAZ' );
console.log( camelize("o--o-o---o") == 'oOOO' );
console.log( camelize("--") == '' );

