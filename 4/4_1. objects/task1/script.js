// https://learn.javascript.ru/object#privet-object
'use strict';

let user = {};
user['name'] = 'John';
user['surname'] = 'Smith';
user['name'] = 'Pete';
delete user['name'];
