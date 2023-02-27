// https://learn.javascript.ru/string#usechenie-stroki
'use strict';

// str - строка, maxlen - целое неотрицательное число
function truncate (str, maxlen) {
    if (str.length <= maxlen) {
        return str;
    }
    return str.slice(0, maxlen);
}

console.log(truncate('Little kitties', 6) == 'Little');
console.log(truncate('Little kitties', 0) == '');
console.log(truncate('Little kitties', 100) == 'Little kitties');
console.log(truncate('Little kitties', 14) == 'Little kitties');
console.log(truncate('Little kitties', 15) == 'Little kitties');
console.log(truncate('Little kittie', 13) == 'Little kittie');
console.log(truncate('', 0) == '');
console.log(truncate('', 5) == '');