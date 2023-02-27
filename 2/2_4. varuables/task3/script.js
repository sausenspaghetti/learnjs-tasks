// https://learn.javascript.ru/variables#kakie-bukvy-zaglavnye-ili-strochnye-ispolzovat-dlya-imyon-konstant
'use strict';

function someCode(l) {
    /* do nothing, return itself */
    return l;
};

/*
  В целом, вопрос о написании с констант капсом или нет 
  зависит от код-стайла принятого в команде, проекте и тд.
  Капсом пишутся 'абсолютно' неизменяемые переменные.
*/
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);