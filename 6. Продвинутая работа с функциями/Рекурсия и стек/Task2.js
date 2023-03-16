//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(number) {
  return number != 1 ? number * factorial(number - 1) : 1;
}
