// Сделайте ячейки таблицы редактируемыми по клику.

// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.

let table = document.getElementById('bagua-table');
let check = null;

table.onclick = function (event) {
  let td = event.target.closest('td');
  if (!td || check) return;

  let textarea = document.createElement('textarea');
  textarea.value = td.innerHTML;
  textarea.style.width = td.clientWidth + 'px';
  textarea.style.height = td.clientHeight + 'px';
  td.replaceWith(textarea);
  textarea.focus();

  let buttonOK = document.createElement('button');
  let buttonCANCEL = document.createElement('button');
  buttonOK.innerHTML = 'OK';
  buttonCANCEL.innerHTML = 'CANCEL';
  textarea.after(buttonOK);
  textarea.after(buttonCANCEL);
  check = true;

  buttonOK.onclick = function () {
    buttonOK.remove();
    buttonCANCEL.remove();
    td.innerHTML = textarea.value;
    textarea.replaceWith(td);
    check = false;
  };

  buttonCANCEL.onclick = function () {
    buttonOK.remove();
    buttonCANCEL.remove();
    textarea.replaceWith(td);
    check = false;
  };
};
