// https://learn.javascript.ru/array-methods#peremeshayte-massiv
'use strict';

// Тасование Фишера-Йетса
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}