function menuOpen() {
  if (down.style.display == 'none') {
    down.style.display = 'inline';
    right.style.display = 'none';
    ul.style.display = 'block';
  } else if (down.style.display == 'inline') {
    down.style.display = 'none';
    right.style.display = 'inline';
    ul.style.display = 'none';
  }
}

menu.addEventListener('click', menuOpen);
