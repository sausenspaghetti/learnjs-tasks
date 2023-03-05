// https://learn.javascript.ru/prototype-inheritance#kuda-budet-proizvedena-zapis
'use strict';

let animal = {
    eat() {
        this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};

// Запись будет произведена в rabbit, т.к. метод исполняется в контексте
// rabbit.
rabbit.eat();