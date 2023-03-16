let field = document.getElementById('field');
let ball = document.getElementById('ball');

let hSide = (field.clientHeight - ball.clientWidth) / 2 + 'px';
let wSide = (field.clientWidth - ball.clientWidth) / 2 + 'px';

ball.style.paddingTop = hSide;
ball.style.paddingLeft = wSide;
