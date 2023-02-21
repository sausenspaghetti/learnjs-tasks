// https://learn.javascript.ru/json#preobrazuyte-obekt-v-json-a-zatem-obratno-v-obychnyy-obekt
'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let userJSON = JSON.stringify(user);
console.log(userJSON);

let userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);