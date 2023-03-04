// https://learn.javascript.ru/bind#ispolzovanie-chastichno-primenyonnoy-funktsii-dlya-logina
'use strict';

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
  
let user = {
    name: 'John',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

function partial(context, func, ...partArgs) {
    return function(...args) {
        return func.call(context, ...partArgs, ...args);
    }
}


let ok = partial(user, user.login, true); // user.login.bind(user, true)
let fail = partial(user, user.login, false);


askPassword(ok, fail);