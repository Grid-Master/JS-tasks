// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// <textarea> позволяет редактировать HTML в элементе <div>.

// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>,
//      и его содержимое становится HTML-кодом в <div>.

let viewEl = document.getElementById('view');
viewEl.tabIndex = 0;

let textareaEl = document.createElement('textarea');
textareaEl.classList.add('edit');

viewEl.addEventListener('focus', function (event) {
  textareaEl.value = viewEl.innerHTML;
  viewEl.replaceWith(textareaEl);
  textareaEl.focus();
});

textareaEl.addEventListener('blur', function (event) {
  viewEl.innerHTML = textareaEl.value;
  textareaEl.replaceWith(viewEl);
});

textareaEl.onkeydown = function (event) {
  if (event.key == 'Enter') {
    this.blur();
  }
};
