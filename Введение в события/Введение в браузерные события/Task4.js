//Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:

function moveBall(event) {
  let x = event.clientX - ball.offsetWidth + 'px';

  let fieldCoords = this.getBoundingClientRect();

  let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
  };

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = x;
  ball.style.top = ballCoords.top + 'px';
}

field.addEventListener('click', moveBall);
