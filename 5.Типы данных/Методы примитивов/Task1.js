//Можно ли добавить свойство строке?

let str = 'Привет';

str.test = 5;

alert(str.test); // undefined (или ошибка со строгим режимом use strict)
