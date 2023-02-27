// https://learn.javascript.ru/number#vvod-chislovogo-znacheniya
'use strict';

function readNumber () {
    while (true) {
        let digit = prompt('Enter the number', 0);

        if (digit === null) {
            return null;
        } 
        else if ( isFinite(digit) ) {
            return +digit;
        }
    }
}

alert( readNumber() );
