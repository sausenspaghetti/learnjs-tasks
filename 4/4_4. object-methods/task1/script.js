'use strict';

function makeUser() {
    return {
        name: 'John',
        ref: this
    }
}

/*
    Результат сильно зависит от 'use strict' и от того, в какой среде запущен
    скрипт. При включенном 'use strict' вместо this (если функция не является
    методом объекта) будет подставлен undefined. У undefined нет свойства name,
    что вызовет ошибку.

    При запуске с отключенным 'use strict' в браузере вместо this будет 
    подставлен объект window, а в node - global. У обоих этих объектов
    отсутствует свойство name, так что при вызове user.ref.name будет выведено
    undefined.
*/

let user = makeUser();

// alert(user.ref.name);
console.log(user.ref.name);