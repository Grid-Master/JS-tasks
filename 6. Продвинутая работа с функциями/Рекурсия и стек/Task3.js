//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(number) {
  return number <= 1 ? number : fib(number - 1) + fib(number - 2);
}
