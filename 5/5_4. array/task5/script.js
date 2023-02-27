// https://learn.javascript.ru/array#podmassiv-naibolshey-summy
'use strict';

/*
    Создаем массив частичных сумм исходного массива таким образом, что: 
    subarr[i] = sum(arr[0], arr[1], ... arr[i]).
*/
function makeSubArray (arr) {
    if (arr.length == 0){
        return [];
    }

    let subarr = [arr[0]];
    for(let i = 1; i < arr.length; i++) {
        // Вычисляем сумму элементов arr от 0 до i
        let next_sum = subarr[subarr.length - 1] + arr[i]; 
        subarr.push(next_sum);
    }

    return subarr;
}
 
/*  
    Обозначим, arr.length = n

    Для решения задачи поиска интервала с наибольшей суммой нужно перебрать
    интервалы [l, r] для всех  0 <= l <= r < n.

    Грубый подход дает: O(n ^ 2) ~ перебор всех интервалов, O(n) ~ вычисление
    суммы одного интервала. Суммарно O(n ^ 3).
    
    Введение массива частичных сумм позволяет искать сумму на интервале [l, r]
    за константное время - для этого достаточно найти разность: 
        partSum[r] - partSum[l - 1] 
    Что приводит к квадратичному времени исполнения.

*/
function getMaxSubSumDummy(arr) {
    // subarr -- строим подмассив
    let partSum = makeSubArray(arr);
    let res = arr[0];
    
    for(let r = 1; r < arr.length; r++) {
        for(let l = 0; l <= r; l++) {
            // вычисляем сумму на [l, r]
            let sumInt = (l == 0) ? partSum[r] : (partSum[r] - partSum[l - 1]);
            res = Math.max(res, sumInt);
        }
    }
    return res;
}
/*
    Более быстрое (линейное) решение получится при использовании другого
    подхода - создадим массив partArr, в котором будем хранить наибольшие
    суммы на интервалах, т.е. partArr[i] - наибольшая сумма среди всех
    интервалов вида: [0, i], [1, i] ... [i, i] (т.е. заканчивающихся на i).

    Таким образом на одной итерации мы вычисляем partArr[i] через
    partArr[i - 1]. Если partArr[i - i] меньше нуля, то она даст отрицательный
    вклад в partArr[i] и ее можно не учитывать.
    
*/
function getMaxSubSumNotOptimized (arr) {
    let partArr = [];
    for(let item of arr){
        partArr.push(item);
    }
    let bestVal = arr[0];
 
    for(let i = 1; i < arr.length; i++) {
        partArr[i] = Math.max(partArr[i], arr[i] + partArr[i - 1]);
        bestVal = Math.max(bestVal, partArr[i]);
    }

    return bestVal;
}

/*
    Если внимательно посмотреть в тело цикла, можно заметить, что каждая
    итерация использует только текущее и предыдущее значение partArr.
    Следовательно дополнительный массив можно убрать
*/
function getMaxSubSum (arr) {
    let next, prev;
    let bestVal = arr[0];
    prev = arr[0];
 
    for(let i = 1; i < arr.length; i++) {
        next = (prev > 0) ? prev + arr[i] : arr[i];
        bestVal = Math.max(bestVal, next);
        prev = next;
    }

    return bestVal;
}

function getMaxSubSum1(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }

console.log( getMaxSubSum([-1, 2, 3, -9]) == 5); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) == 11); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) == 3); // 3
console.log( getMaxSubSum([1, 2, 3]) == 6); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]) == 100); // 100
console.log( getMaxSubSum([-9, -3, -1, -3, -5]) == -1); // -1
console.log( getMaxSubSum([0]) == 0); // -1
console.log( getMaxSubSum([1, 2, 3, -4, 5]) == 7); // 7
console.log( getMaxSubSum([1, 2, 3, -8, 9]) == 9); // 9
console.log( getMaxSubSum([1, 2, -1, -1, 3]) == 4); // 4
console.log( getMaxSubSum([5, -4, 5, -4, 5, -4, 5, -4, 5, -4, 5, -4]) == 10); // 10
console.log( getMaxSubSum([5, -4, 5, -4, 5, -4, 5, -4, 5, -4, 5]) == 10); // 10