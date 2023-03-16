// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование):
//  научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

// Новые значения для аргумента position:

// top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.

function showNote(anchor, position, html) {
  anchor.style.position = 'relative';
  let note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = html;
  anchor.append(note);

  let borderLeft = parseInt(getComputedStyle(anchor).borderLeft);

  let positionMethods = {
    'top-out'() {
      note.style.top = 0 - note.offsetHeight + 'px';
      note.style.left = 0 - borderLeft + 'px';
    },
    'top-in'() {
      note.style.top = 0 + 'px';
      note.style.left = 0 - borderLeft + 'px';
    },
    'right-out'() {
      note.style.right = 0 - note.offsetWidth + 'px';
      note.style.top = 0 + 'px';
    },
    'right-in'() {
      note.style.right = 0 + 'px';
      note.style.top = 0 + 'px';
    },
    'bottom-out'() {
      note.style.left = 0 - borderLeft + 'px';
      note.style.bottom = 0 - note.offsetHeight + 'px';
    },
    'bottom-in'() {
      note.style.left = 0 - borderLeft + 'px';
      note.style.bottom = 0 + 'px';
    },
    'right-bottom-out'() {
      note.style.right = 0 - note.offsetWidth + 'px';
      note.style.bottom = 0 + 'px';
    },
    'right-bottom-in'() {
      note.style.right = 0 + 'px';
      note.style.bottom = 0 + 'px';
    },
  };

  positionMethods[position]();
}

let anchor = document.querySelector('blockquote');

// showNote(anchor, 'top-out', 'top-out note');
// showNote(anchor, 'top-in', 'top-in note');
// showNote(anchor, 'right-out', 'right-out note');
// showNote(anchor, 'right-in', 'right-in note');
// showNote(anchor, 'bottom-out', 'bottom-out note');
// showNote(anchor, 'bottom-in', 'bottom-in note');
// showNote(anchor, 'right-bottom-out', 'right-bottom-out');
// showNote(anchor, 'right-bottom-in', 'right-bottom-in');
