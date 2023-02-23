// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  let d1 = new Date();
  let res = d1 - date;
  if (res == 1) {
    return 'прямо сейчас';
  } else if (res / 1000 < 60) {
    return `${res / 1000} секунд назад`;
  } else if (res / 1000 > 60 && res / 1000 < 86400) {
    return `${res / 60000} мин. назад`;
  } else return date;
}
