// https://learn.javascript.ru/weakmap-weakset#hranenie-otmetok-ne-prochitano
'use strict';

let notify = {
    isRead: function (msg) {
        return this.cache.has(msg) 
    },
    readMessage: function (msg) {
        this.cache.add(msg);
    },
    cache: new WeakSet(), 
};


let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// читаем сообщения
notify.readMessage(messages[0]);
notify.readMessage(messages[1]);

console.log( notify.isRead(messages[2]) == false );
notify.readMessage(messages[2]);
console.log( notify.isRead(messages[2]) == true );

delete messages[2];
