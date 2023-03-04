// https://learn.javascript.ru/call-apply-decorators#dekorator-shpion
'use strict';

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}
  
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function spy(func) {
    
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func(...args);
    }

    wrapper.calls = [];
    return wrapper;
}