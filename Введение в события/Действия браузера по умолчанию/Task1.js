// Почему в коде ниже return false не работает?

// <script>
function handler() {
  alert('...');
  return false;
}
// </script>

// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

//решение
function handler2(e) {
  alert('...');
  e.preventDefault();
}
