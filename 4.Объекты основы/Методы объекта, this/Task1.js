//Здесь функция makeUser возвращает объект.

//Каким будет результат при обращении к свойству объекта ref?

function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // будет ошибка так как ref:this принимает this функции makeUser()
