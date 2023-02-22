//
'use strict';

class Rabbit extends Object {
    constructor(name) {
        super();            // достаточно добавить эту строчку
        this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  console.log( rabbit.hasOwnProperty('name') );                     // Ошибки нет
  console.log( Rabbit.__proto__ === Object );                       // static методы/свойства
  console.log( Rabbit.prototype.__proto__ === Object.prototype );   // все остальные

