//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: 'John',
};

// это будет работать?
user.name = 'Pete';

//ответ: да, можно так как это значение обьекта а константа тут ссылка на объект которую нельзя менять
