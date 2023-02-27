// https://learn.javascript.ru/function-basics#obyazatelen-li-else
'use script';

/*
    Оба варианта работают одинаково.
*/

// 1st way
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
}

// 2nd way
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }