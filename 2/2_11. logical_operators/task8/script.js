// https://learn.javascript.ru/logical-operators#vopros-ob-if
'use strict';

if (-1 || 0) alert( 'first' );          // выведется, т.к. -1 - это true
if (-1 && 0) alert( 'second' );         // не выведется, т.к. 0 - это false
if (null || -1 && 1) alert( 'third' );  // выведется, т.к. -1 && 1 - преобразуется к 1, а это true