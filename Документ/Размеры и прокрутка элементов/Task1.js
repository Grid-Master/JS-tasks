// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху.
//  А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

// Напишите соответствующее выражение для произвольного элемента elem.

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
