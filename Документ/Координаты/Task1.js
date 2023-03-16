// В ифрейме ниже располагается документ с зелёным «полем».

// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

const field = document.querySelector('.field');

const cords = field.getBoundingClientRect();
console.log(cords);

const cordsOne = `${cords.x}:${cords.y}`;

const cordsTwo = `${cords.x + cords.width}:${cords.y + cords.height}`;

const cordsThree = `${cords.x + field.clientLeft}:${cords.y + field.clientTop}`;

const x = cords.x + field.offsetWidth - field.clientLeft;
const y = cords.y + field.offsetHeight - field.clientTop;
const cordsFour = `${x}:${y}`;
