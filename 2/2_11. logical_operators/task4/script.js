// https://learn.javascript.ru/logical-operators#chto-vyvedet-alert-i
'use strict';

// alert возвращается undefined.
// выведется 1 (от внешнего alert), 
// потом undefined (от внутреннего alert(1)) 
alert( alert(1) && alert(2) );