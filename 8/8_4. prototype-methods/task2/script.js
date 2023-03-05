// https://learn.javascript.ru/prototype-methods#raznitsa-mezhdu-vyzovami
'use strict';

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");


rabbit.sayHi();                        
Rabbit.prototype.sayHi();               // вызывает тот же метод, но с другим контекстом 
Object.getPrototypeOf(rabbit).sayHi();  // Возвращает прототип, вызывает тот же метод, тем же контекстом
rabbit.__proto__.sayHi();               // то же самое
