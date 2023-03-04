// https://learn.javascript.ru/call-apply-decorators#tormozyaschiy-throttling-dekorator
'use strict';


function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

function throttle(func, ms) {

    let isCoolDown = false;
    let lastCall = null;

    function wrapper(...args) {
        // Если тротлится -> запоминаем аргументы, вызовем позже
        if(isCoolDown) {
            lastCall = [...args];
            return;
        }

        isCoolDown = true;
        lastCall = null;

        func.call(this, ...args);
        setTimeout(() => {
            isCoolDown = false;
            if(lastCall !== null) {
                wrapper.call(this, ...lastCall);
                lastCall = null;
            }
        }, ms);    
        
    }
    return wrapper;
}
