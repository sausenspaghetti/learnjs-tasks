// https://learn.javascript.ru/function-basics#perepishite-funktsiyu-ispolzuya-operator-ili
'use strict';

function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return age > 18 ||  confirm('Родители разрешили?');
}

checkAge2(17);