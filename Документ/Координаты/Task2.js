// Создайте функцию positionAt(anchor, position, elem),
//которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor

function positionAt(anchor, position, elem) {
  elem.style.position = 'fixed';
  let coords = anchor.getBoundingClientRect();

  switch (position) {
    case 'top':
      elem.style.left = coords.left + 'px';
      elem.style.top = coords.top - elem.offsetHeight + 'px';
      break;
    case 'right':
      elem.style.left = coords.right + 'px';
      elem.style.top = coords.top + 'px';
      break;
    case 'bottom':
      elem.style.left = coords.left + 'px';
      elem.style.top = coords.bottom + 'px';
  }
}
