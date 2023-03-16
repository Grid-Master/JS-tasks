// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд.
//  Те вызовы, которые попадают в период «торможения», игнорируются.

function throttle(func, ms) {
  let isReady = true;
  let tmp;

  return function (...args) {
    tmp = args;
    if (!isReady) return;
    isReady = false;
    func.apply(this, args);
    setTimeout(() => {
      isReady = true;
      func.apply(this, tmp);
    }, ms);
  };
}
