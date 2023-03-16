//  У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

const items = document.querySelectorAll('li');

items.forEach((item) => {
  item = `${item.firstChild.data.trim()}: ${item.querySelectorAll('li').length}`;

  alert(item);
});
