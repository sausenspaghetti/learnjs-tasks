// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska-v-obratnom-poryadke
'use strict';

function createList(arr) {
    let list = {};
    let curr = list;
    for(let i = 0; i < arr.length; i++) {
        curr["value"] = arr[i];
        (i != arr.length - 1) ? (curr = curr.next = {}) : (curr.next = null);
    }
    return list;
}

function printListReverse (v) {
    if (v !== undefined && v !== null ) {
        // Сначала вызываем отрисовку для следующей ноды
        printListReverse(v.next);
        console.log(v.value);
    }
}

let example = createList([1,2, null, 'spaghetti']);
printListReverse(example);