//Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

//Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(users) {
  let result = {};

  for (let user of users) {
    result[user.id] = {
      id: user.id,
      name: user.name,
      age: user.age,
    };
  }

  return result;
}

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);
