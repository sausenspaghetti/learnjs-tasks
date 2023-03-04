// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska
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

// 1. цикл - оптимальнее рекурсии, не нужно следить за переполнением стека
function printList(list) {
    let v = list;
    while(v !== null && v !== undefined) {
        console.log(v.value);
        v = v.next;
    }
}

function printListRec (v) {
    if (v !== undefined && v !== null ) {
        console.log(v.value);
        printListRec(v.next);
    }
}

let example = createList([1, 'apple', null, 5]);
printList(example);
printListRec(example);