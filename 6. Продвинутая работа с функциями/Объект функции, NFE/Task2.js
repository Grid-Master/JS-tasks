//Напишите функцию sum, которая бы работала следующим образом:

/*sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */

let sum = function (a) {
  sum.toString = function () {
    return sum.result;
  };

  if (sum.result) {
    sum.result += a;
  } else {
    sum.result = a;
  }

  return sum;
};
