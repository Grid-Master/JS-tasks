//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
  return (Date.now() - new Date().setHours(0, 0, 0)) / 1000;
}
