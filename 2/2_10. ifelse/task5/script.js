'use strict';

let message;

let login = '';

message = (login == 'Сотрудник') ? 
    'Привет' :
    (login == 'Директор' ? 
        'Здравствуйте' : 
        (login == '' ? 'Нет логина' : ''));

console.log(message);