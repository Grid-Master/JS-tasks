//У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

function inBetween(a, b) {
  return function (el) {
    return el >= a && el <= b;
  };
}

function inArray(arr) {
  return function (el) {
    return arr.includes(el);
  };
}
