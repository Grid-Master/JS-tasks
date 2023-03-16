// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

//1 <div>
document.body.firstElementChild;
document.body.children[0];

//2 <ul>
document.body.lastElementChild;
document.body.children[1];

//3 <li>
document.body.lastElementChild.lastElementChild;
