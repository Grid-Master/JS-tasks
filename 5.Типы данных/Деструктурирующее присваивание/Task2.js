//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

function topSalary(obj) {
  let [max = false] = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return max ? max[0] : null;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

topSalary(salaries);
