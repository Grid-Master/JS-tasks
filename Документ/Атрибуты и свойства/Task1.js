// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
//     /* your code */
let elem = document.querySelector('[data-widget-name]');
alert(elem.dataset.widgetName);
//   </script>
// </body>
// </html>
