//Напишите функцию printList(list), которая выводит элементы списка по одному.

//Сделайте два варианта решения: используя цикл и через рекурсию.

//1
function printList1(list) {
  while (list) {
    alert(list.value);
    list = list.next;
  }
}

//2
function printList2(list) {
  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
}
