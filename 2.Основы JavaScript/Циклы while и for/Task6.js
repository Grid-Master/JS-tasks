//Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

let number;

do {
  number = prompt('введите число больше 100: ');
} while (number <= 100 && number);

//или
while (true) {
  let number = prompt('введи число больше 100: ');
  if (number >= 100 || !number) break;
}
