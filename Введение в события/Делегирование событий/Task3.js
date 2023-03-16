// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

// Каждый элемент <th> имеет атрибут data-type:

let table = document.getElementById('grid');
let tbody = document.querySelector('tbody');
let rows = table.rows;

table.addEventListener('click', function (e) {
  let th = e.target.closest('th');
  if (!th || !table.contains(th)) return;

  let ind = [...rows[0].cells].indexOf(th);

  let sortedRows = Array.from(rows)
    .slice(1)
    .sort((rowA, rowB) => {
      switch (th.dataset.type) {
        case 'number':
          return rowA.cells[ind].innerHTML - rowB.cells[ind].innerHTML;
          break;
        case 'string':
          return rowA.cells[ind].innerHTML.toLowerCase() > rowB.cells[ind].innerHTML.toLowerCase()
            ? 1
            : -1;
          break;
      }
    });
  tbody.append(...sortedRows);
});
