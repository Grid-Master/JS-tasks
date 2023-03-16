// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(func, time) {
  let firstCall;
  let lastTimeCall;
  return function (x) {
    if (firstCall === undefined) {
      firstCall = true;
      func.call(this, x);
      lastTimeCall = Date.now();
    } else if (Date.now() - lastTimeCall < time) {
      return;
    } else {
      func.call(this, x);
      lastTimeCall = Date.now();
    }
  };
}
