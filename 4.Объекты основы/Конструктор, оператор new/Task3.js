/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue. */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    let x = +prompt('введите число', 0);
    this.value += x;
  };
}

let acc = new Accumulator(5);
acc.read();
acc.read();
acc.read();
alert(acc.value);
