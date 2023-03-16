// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub,
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

async function getUserData(name) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  return response.status === 200 ? response.json() : null;
}

async function getUsers(names) {
  return Promise.all(names.map(async (name) => await getUserData(name)));
}
