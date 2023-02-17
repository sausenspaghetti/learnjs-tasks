'use strict';


let num;
while(true){
    num = prompt('Введи число', 0);
    if (num == null || Number(num) >= 100){
        break;
    }
}