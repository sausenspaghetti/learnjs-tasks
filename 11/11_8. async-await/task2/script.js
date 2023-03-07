// https://learn.javascript.ru/async-await#perepishite-ispolzuya-async-await 
'use strict';

// const { response } = require("express");

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let resp = await fetch(url);
    if (resp.status == 200) {
        return await resp.json();
    }
    else {
         throw new HttpError(resp);
    }
}
  
// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

    while (true) {
        let name =  prompt("Введите логин?", "iliakan");
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            if (user.name === null) continue;

            alert(`Полное имя: ${user.name}.`);
            return user;
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                continue;
            }
            else {
                throw err;
            }
        }    
    }
}
  
demoGithubUser();