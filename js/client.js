var todos = ['item 1', 'item 2', 'item 3'];

console.log('My todos:',todos);

todos.push('item 4');

console.log('My todos:',todos);

todos[0] = 'item 1 updated';

console.log('My todos:',todos);

todos.splice(3,1);

console.log('My todos:',todos);
