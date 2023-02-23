// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
//mul() возвращает произведение этих свойств.

function Calculator() {
  this.read = () => {
    this.a = +prompt('введите a', 0);
    this.b = +prompt('введите b', 0);
  };
  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  };
}

let calc = new Calculator();
calc.read();
alert(calc.mul());
alert(calc.sum());
