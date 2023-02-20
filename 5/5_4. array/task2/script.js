'use strict';

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[1] = 'Классика';  
console.log(styles.shift());
styles.unshift('Регги');
styles.unshift('Рэп'); 