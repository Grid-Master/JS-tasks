// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

//1
function printNumbers1(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

//2
const printNumbers2 = (from, to) => {
  for (let i = from; i <= to; i += 1) {
    setTimeout(() => console.log(i), 1000 * i);
  }
};
