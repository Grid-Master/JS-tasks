//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
  return str != '' ? str[0].toUpperCase() + str.slice(1) : 'вы ввели пустую строку';
}
