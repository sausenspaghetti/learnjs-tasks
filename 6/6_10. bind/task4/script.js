//  https://learn.javascript.ru/bind#ispravte-funktsiyu-teryayuschuyu-this
'use strict';

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

// Привяжем контекст
user.loginFail = user.loginFail.bind(user);
user.loginOk = user.loginOk.bind(user);

askPassword(user.loginOk, user.loginFail);