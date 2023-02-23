//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(users) {
  users.sort((a, b) => (a.age > b.age ? 1 : -1));
}
