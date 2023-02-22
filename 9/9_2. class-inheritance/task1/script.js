// https://learn.javascript.ru/class-inheritance#oshibka-sozdaniya-ekzemplyara-klassa
'use strict';

class Animal {

    constructor(name) {
        this.name = name;
    }
  
  }
  
class Rabbit extends Animal {
    constructor(name) {
        super(name);                // нужно вызвать конструктора базового класса
        // this.name = name;        // необязательно
        this.created = Date.now();  
    }
}
  
let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);