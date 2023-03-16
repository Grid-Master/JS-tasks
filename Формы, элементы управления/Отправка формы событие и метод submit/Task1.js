// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK»,
// после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.

let button = document.getElementById('button');
let modal = document.getElementById('prompt-form-container');
let form = document.forms[0];
let cancel = form.elements.cancel;
let ok = cancel.previousElementSibling;
let message = document.getElementById('prompt-message');
let input = form.elements.text;

modal.hidden = true;

function showPrompt(html, callback) {
  message.innerHTML = html;

  cancel.addEventListener('click', handler1);
  ok.addEventListener('click', handler2);
  document.addEventListener('keydown', handler3);

  function handler1(e) {
    callback(null);
    modal.hidden = true;
  }

  function handler2(e) {
    e.preventDefault();
    if (!input.value) return;
    callback(input.value);
    modal.hidden = true;
  }

  function handler3(e) {
    if (e.code === 'Tab') handler4(e);
    if (e.code !== 'Enter' && e.code !== 'Escape') return;
    if (e.code === 'Escape') handler1(e);
    if (e.code === 'Enter') handler2(e);
  }

  function handler4(e) {
    let active = document.activeElement;
    if (e.shiftKey) {
      if (active === input) {
        e.preventDefault();
        cancel.focus();
      }
    } else {
      if (active === cancel) {
        e.preventDefault();
        input.focus();
      }
    }
  }
}

button.onclick = function () {
  modal.hidden = false;
  input.focus();
  showPrompt('Введите что-нибудь ...умное :)', function (value) {
    alert(value);
  });
};
