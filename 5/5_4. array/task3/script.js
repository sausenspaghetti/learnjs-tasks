// https://learn.javascript.ru/array#vyzov-v-kontekste-massiva
'use strict';

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

// arr - объект, по ключу 2 - лежит метод этого объекта, таким образом, объект
// является контекстом исполнения кода функции. Выведется объект массива arr
arr[2]();