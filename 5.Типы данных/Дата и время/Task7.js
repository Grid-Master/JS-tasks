//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  return 24 * 60 * 60 - (Date.now() - new Date().setHours(0, 0, 0)) / 1000;
}
