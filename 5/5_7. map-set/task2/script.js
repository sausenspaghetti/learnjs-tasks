// https://learn.javascript.ru/map-set#otfiltruyte-anagrammy
'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

let arr1 = ['ssus', 'usss', 'SuSS', 'SsUS'];

console.log( aclean(arr1) );

function aclean (arr) {
    // 1. отсортируем у каждого слова буквы
    // 2. Положим в map в качестве ключа (значением будет массив)
    let awords = new Map();
    for(let word of arr) {
        let wsorted = getSortedLetters(word);
        if (awords.has(wsorted) == false ) {
            awords.set(wsorted, [word]);
        }
        else {
            awords.get(wsorted).push(word);
        }
    }

    let res = [];
    for(let anagr of awords.keys()) {
        res.push(awords.get(anagr)[0]);
    }
    return res;
}

function getSortedLetters (word) {
    return word.toLowerCase().split('').sort().join('');
}