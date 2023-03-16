// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};
let container = document.getElementById('container');

function createTree(container, obj) {
  let ul = document.createElement('ul');
  container.append(ul);

  for (let key of Object.keys(obj)) {
    let li = document.createElement('li');
    li.innerHTML = key;
    ul.append(li);

    if (Object.keys(obj[key]).length) {
      createTree(ul, obj[key]);
    }
  }
}

createTree(container, data);
