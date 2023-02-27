// https://learn.javascript.ru/string#vydelit-chislo
'use strict';

// Буквально такой формат '$${число}' : '$120', $1 ...
function extractCurrencyValue (strMoney) {
    return +strMoney.slice(1)
}

console.log(extractCurrencyValue('$120') == 120);
console.log(extractCurrencyValue('$15') == 15);
console.log(extractCurrencyValue('$1.53') == 1.53);
console.log(extractCurrencyValue('$0') == 0);
console.log(extractCurrencyValue('$') == 0);