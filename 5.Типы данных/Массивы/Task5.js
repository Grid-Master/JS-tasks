//На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

//Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

//Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
  let sum = 0;
  let m = [];
  for (let x of arr) {
    sum = sum + x;
    m.push(sum);
    if (sum < 0) {
      sum = 0;
      m.push(sum);
      continue;
    }
  }
  let min = m[0];
  for (let n = 1; n < m.length; n++) {
    let max = Math.max(min, m[n]);
    min = max;
  }
  if (arr.length === 0) {
    min = 0;
  }
  return min;
}
