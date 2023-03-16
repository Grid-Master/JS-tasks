// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.

const mouse = document.getElementById('mouse');
mouse.addEventListener('click', change);

function change() {
  mouse.tabIndex = '1';
  mouse.focus();

  mouse.style.position = 'fixed';
  mouse.style.left = mouse.offsetLeft;
  mouse.style.top = mouse.offsetTop;
  const step = 100;

  mouse.onkeydown = function (event) {
    switch (event.key) {
      case 'ArrowUp':
        if (parseInt(mouse.style.top) < mouse.clientHeight) {
          mouse.style.top = 0 + 'px';
        } else {
          mouse.style.top = parseInt(mouse.style.top) - step + 'px';
        }
        break;
      case 'ArrowDown':
        if (
          parseInt(mouse.style.top) >
          document.documentElement.clientHeight - mouse.clientHeight * 2
        ) {
          mouse.style.top = document.documentElement.clientHeight - mouse.clientHeight + 'px';
        } else {
          mouse.style.top = parseInt(mouse.style.top) + step + 'px';
        }
        break;
      case 'ArrowRight':
        if (
          parseInt(mouse.style.left) >
          document.documentElement.clientWidth - mouse.clientWidth * 2
        ) {
          mouse.style.left = document.documentElement.clientWidth - mouse.clientWidth + 'px';
        } else {
          mouse.style.left = parseInt(mouse.style.left) + step + 'px';
        }
        break;
      case 'ArrowLeft':
        if (parseInt(mouse.style.left) < mouse.clientWidth) {
          mouse.style.left = 0 + 'px';
        } else {
          mouse.style.left = parseInt(mouse.style.left) - step + 'px';
        }
        break;
    }
  };
}
