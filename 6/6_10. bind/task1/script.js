// https://learn.javascript.ru/bind#svyazannaya-funktsiya-kak-metod
'use strict';

function f() {
    console.log( this ); // null
}

let user = {
    g: f.bind(null)
};

user.g();   // контекс this=null. Не имеет значение откуда вызван метод