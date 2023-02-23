//Напишите код, который выводит все простые числа из интервала от 2 до n.

let n = 10;
for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      alert(i);
    }
  }
}
