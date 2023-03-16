// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let listLi = document.querySelectorAll('li');
const carousel = document.querySelector('.carousel');

const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');

const updateListLi = () => {
  listLi = document.querySelectorAll('li');
};

buttonPrev.addEventListener('click', () => {
  carousel.prepend(listLi[listLi.length - 1]);
  updateListLi();
});

buttonNext.addEventListener('click', () => {
  carousel.append(listLi[0]);
  updateListLi();
});
