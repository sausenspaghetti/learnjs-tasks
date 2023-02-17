'use strict';

let CORRECT_PASSW = 'Я главный';

let login = prompt('Кто там?', '');

if (login == 'Админ'){
    let passw = prompt('Пароль?', '');
    if (passw == CORRECT_PASSW){
        alert('Здравствуйте!');
    }
    else if (passw === null){
        alert('Отменено');
    }
    else {
        alert('Неверный пароль');
    }
}
else if (login == null){
    alert('Отменено');
}
else {
    alert('Я вас не знаю');
}