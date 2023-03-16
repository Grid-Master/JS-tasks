//Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

thumbs.onclick = function (e) {
  let elem = e.target;
  if (elem.tagName == 'IMG') {
    let href = elem.closest('a').href;
    largeImg.src = href;
    event.preventDefault();
  }
};
