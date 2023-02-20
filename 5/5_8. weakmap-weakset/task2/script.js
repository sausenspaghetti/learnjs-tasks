// https://learn.javascript.ru/weakmap-weakset#hranenie-vremeni-prochteniya
'use strict';

let notify = {
    isRead: function (msg) {
        return this.cache.has(msg) 
    },
    readMessage: function (msg) {
        this.cache.set(msg, new Date()); // текущая дата-время
    },
    cache: new WeakMap(), 
    dateRead: function (msg) {
        if (this.isRead(msg) == true ){
            return this.cache.get(msg);
        }
        return null;
    }
}

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

notify.readMessage(messages[0]);

console.log( notify.isRead(messages[1]) == false );

notify.readMessage(messages[1])
console.log( notify.isRead(messages[1]) == true );
console.log( notify.dateRead(messages[1]) );