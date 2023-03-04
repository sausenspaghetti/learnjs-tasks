// https://learn.javascript.ru/closure#funktsiya-v-if
'use strict';

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

// Ошибка, sayHi определена в другой области видимости
sayHi();
