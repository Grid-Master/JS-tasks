// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент,
//  а затем рассчитать, какая это будет сумма через заданный промежуток времени.

let form = document.forms.calculator;

form.oninput = onInput;
onInput.call(form);

function onInput() {
  if (!formValid(this)) return;

  let values = [].map.call(this.elements, (field) => field.value);

  let total = calcDeposit(...values);

  showDiagram(values[0], total);
}

function formValid(form) {
  return [].every.call(form.elements, (field) => fieldValid(field));
}

function fieldValid(field) {
  return Boolean(field.value);
}

function calcDeposit(deposit, term, interest) {
  return Math.round(deposit * (1 + (0.01 * interest * term) / 12));
}

function showDiagram(initial, total) {
  let diagram = document.querySelector('#diagram');

  let before = diagram.querySelector('#money-before');
  before.innerHTML = ' ' + initial;
  let after = diagram.querySelector('#money-after');
  after.innerHTML = ' ' + total;

  let ratio = initial / total;

  let beforeBar = diagram.querySelector('td > div');
  beforeBar.style.transform = 'scaleY(' + ratio + ')';

  let afterBar = diagram.querySelector('td:nth-child(2) > div');
  afterBar.style.height = 100 + 'px';
  afterBar.style.transform = 'scaleY(1)';
}
