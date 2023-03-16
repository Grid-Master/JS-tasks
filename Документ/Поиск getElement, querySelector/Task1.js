// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html(https://learn.javascript.ru/task/find-elements/table.html)
//в отдельном окне и используйте для этого браузерные инструменты разработчика.

// 1
let table = document.getElementById('age-table');
// 2
document.querySelectorAll('#age-table label');
// 3
table.rows.at(0).cells.at(0);
// или
table.getElementsByTagName('td').at(0);
// 4
let form = document.getElementsByName('search').at(0);
// 5
form.getElementsByTagName('input').at(0);
// 6
let inputs = form.querySelectorAll('input');
inputs.at(-1);
