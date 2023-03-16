//Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

container.onclick = function (event) {
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
};
