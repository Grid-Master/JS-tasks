//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let array = [vasya, petya, masha];

function getAverageAge(users) {
  let arr = [];
  for (let user of users) {
    arr.push(user['age']);
  }

  let averageAge = arr.reduce((acc, age) => acc + age) / users.length;
  return averageAge;
}

alert(getAverageAge(array));
