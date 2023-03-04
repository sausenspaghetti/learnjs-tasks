// https://learn.javascript.ru/bind#povtornyy-bind
'use strict';

function f() {
    console.log(this.name);
}

// Второй bind не влияет на контекст.
// Нельзя изменить установленный однажды bind контекст.
f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
