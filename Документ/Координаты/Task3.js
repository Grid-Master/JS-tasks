// Измените код решения предыдущего задания так,
//  чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

// Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой,
// добавьте стиль элементу <body style="height: 2000px">.

function positionAt(anchor, position, elem) {
  elem.style.position = 'absolute';
  let coords = anchor.getBoundingClientRect();

  switch (position) {
    case 'top':
      elem.style.left = coords.left + pageYOffset + 'px';
      elem.style.top = coords.top - elem.offsetHeight + pageXOffset + 'px';
      break;
    case 'right':
      elem.style.left = coords.right + pageYOffset + 'px';
      elem.style.top = coords.top + pageXOffset + 'px';
      break;
    case 'bottom':
      elem.style.left = coords.left + pageYOffset + 'px';
      elem.style.top = coords.bottom + pageXOffset + 'px';
  }
}
