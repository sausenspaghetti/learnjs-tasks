// https://learn.javascript.ru/closure#armiya-funktsiy
'use strict';

/*
    У всех созданных функций одинаковое внешнее лексическое окружение 
    функция makeArmy, поэтому выводится i в конце итераций  (10).
    Чтобы этого избежать необходимо добавить соответствующую локальную
    переменную в каждую функцию.
*/

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let shooter = function() { // функция shooter
            console.log( shooter.innerCount ); // должна выводить порядковый номер
        };
        shooter.innerCount = i;
        shooters.push(shooter);
        i++;
    }
  
    return shooters;
}
  
let army = makeArmy();
army[0](); 
army[5](); 
army[8](); 

