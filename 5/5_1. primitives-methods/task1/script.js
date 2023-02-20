// 'use strict';

let str = "Привет";

/*
    str.test вызывает объект-обертку. В строгом режиме попытка добавить в него
    новое свойство вызовет ошибку. В нестрогом - нет.
*/
str.test = 5;  

/*
    Если мы работает в нестрогом режиме, предыдущая строка не вызвала ошибок.
    Однако объект-обертка удалился после вызова свойства test. Таким образом,
    str не имеет этого свойства, будет возвращено undefined.
*/

console.log(str.test);