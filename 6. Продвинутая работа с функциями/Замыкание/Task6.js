//У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

//Напишите функцию byField, которая может быть использована для этого

const byField = (fieldName) => (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
