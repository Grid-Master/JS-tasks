//Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:

let elements = document.querySelectorAll('li');

elements.forEach((element) => {
  let content = element.firstChild.textContent;
  element.firstChild.textContent = '';
  element.insertAdjacentHTML('afterbegin', `<span>${content}</span>`);
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  let childList = event.target.closest('li').lastElementChild;

  if (childList.tagName === 'UL') {
    childList.hidden = !childList.hidden;
  }
});
