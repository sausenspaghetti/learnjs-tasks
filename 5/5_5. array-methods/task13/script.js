// https://learn.javascript.ru/array-methods#sozdayte-obekt-s-klyuchami-iz-massiva
'use strict';


let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  console.log(usersById);

  /*
  // после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

function groupById (users) {
    return users.reduce((prev, user) => {
        prev[user.id] = user;
        return prev;
    }, {});
}