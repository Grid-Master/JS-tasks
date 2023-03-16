//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

document.getElementById('hider').onclick = function () {
  document.getElementById('text').hidden = true;
};
