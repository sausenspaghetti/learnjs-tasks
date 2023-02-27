// https://learn.javascript.ru/string#proverka-na-spam
'use strict';

function checkSpam(text) {
    // dummy
    text = text.toLowerCase();
    return text.includes('viagra') || text.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') == true );
console.log( checkSpam('free xxxxx') == true );
console.log( checkSpam("innocent rabbit") == false );
console.log( checkSpam("Viagr A") == false );