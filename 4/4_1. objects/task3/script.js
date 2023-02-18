'use strict';

/*
    const - это константная ссылка, а не ссылка на константу. 
    Нельзя "изменить" место, куда ссылается объект, а не его свойства. 
*/
const user = {
    name: "John"
};

user['surname'] = 'Smith';

console.log(user);
