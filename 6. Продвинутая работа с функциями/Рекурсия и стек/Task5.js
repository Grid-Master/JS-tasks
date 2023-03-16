//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

//Сделайте два решения: с использованием цикла и через рекурсию.

//1
function printReversedList1(list) {
  let arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

//2
function printReversedList2(list) {
  if (list.next) {
    printReversedList2(list.next);
  }

  alert(list.value);
}
