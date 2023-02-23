//Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23,
};

let meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    if (value == this) return undefined;

    if (typeof value == 'object') {
      for (let key in value) {
        if (value[key] == this) {
          let copy = Object.assign({}, value);
          delete copy[key];
          return copy;
        }
      }
    }

    return value;
  }),
);
