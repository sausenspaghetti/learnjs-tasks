// https://learn.javascript.ru/async-await#perepishite-ispolzuya-async-await
'use strict';


async function loadJson(url) {
    let res = await fetch(url);
    if(res.status == 200) {
        return await responce.json();
    } else {
        throw new Error(reponse.status);
    }
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404