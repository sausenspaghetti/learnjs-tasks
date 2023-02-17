'use strict';

let ex1 = 5 > 4;                    // true
let ex2 = "ананас" > "яблоко";      // false
let ex3 = "2" > "12";               // true  - сравниваются как строки
let ex4 = undefined == null;        // true  - специальное правило
let ex5 = undefined === null;       // false - разные типы
let ex6 = null == "\n0\n";          // false - null не равен ничему и ни к чему не приводится при нестрогом неравенстве
let ex7 = null === +"\n0\n";        // false - точное сравнение дает false, если типы операндов отличаются