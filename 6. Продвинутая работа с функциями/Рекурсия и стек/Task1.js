//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

//  Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

//1
function sumTo1(number) {
  let result = 0;
  if ((number) => 0) {
    for (let i = 1; i <= number; i++) {
      result += i;
    }
    return result;
  }

  return 'число должно быть больше чем 0 либо равным 0';
}

//2
function sumTo2(number) {
  return number == 1 ? 1 : number + sumTo2(number - 1);
}

//3
function sumTo3(number) {
  return (number * (number + 1)) / 2;
}
