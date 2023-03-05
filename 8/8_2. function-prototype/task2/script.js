// https://learn.javascript.ru/function-prototype#sozdayte-novyy-obekt-s-pomoschyu-uzhe-suschestvuyuschego
'use strict';

function getObj() {
    this.field = 1;
}

// obj - может быть любым объектом созданным через new, у которого в прототипе 
// есть функция constructor. Например:

let obj = new getObj()  // obj - создан через new
let obj2 = new obj.constructor();

console.log(obj2);