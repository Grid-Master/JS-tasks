//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
