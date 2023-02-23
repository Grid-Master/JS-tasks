//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

//Создайте функцию copySorted(arr), которая будет возвращать такую копию.

const arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  return arr.slice().sort();
}

const sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
