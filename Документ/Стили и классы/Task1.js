// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: 'Hello!', // HTML-уведомление
  className: 'welcome', // дополнительный класс для div (необязательно)
});

function showNotification({ top = 0, right = 0, className, html }) {
  let body = document.querySelector('body');
  let div = document.createElement('div');

  div.style.cssText = `top: ${top}px; right: ${right}px;`;
  div.classList.add('notification', `${className}`);
  div.innerHTML = html;
  body.append(div);

  setTimeout(() => div.remove(), 1500);
}
