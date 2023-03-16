// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том,
// действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

document.getElementById('thumbs').addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.closest('a')) return;
  document.getElementById('largeImg').src = event.target.src;
});
