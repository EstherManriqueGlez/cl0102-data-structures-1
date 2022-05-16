const { Stack } = require('./classes/stack');
const { Queue } = require('./classes/queue');

const color = require('cli-color');

const stack = new Stack();
const queue = new Queue();


// Stack
//console.log(textStack);
console.log(color.bgBlue('Printing array status'));
console.log(stack.isEmpty() ? 'Is empty' : 'Is not empty');

console.log(color.bgCyan('Pushing 10, 20 and 30 into array'));
stack.push(10);
stack.push(20);
stack.push(30);

console.log(color.bgBlue('Printing array status'));
console.log(stack.isEmpty() ? 'Is empty' : 'Is not empty');

console.log(color.bgGreen('Getting array size'));
console.log(stack.length());

console.log(color.bgMagenta('Printing last element'));
console.log(stack.peek());

console.log(color.bgRed('Getting last element'));
console.log(stack.pop());

console.log(color.bgGreen('Getting new array size'));
console.log(stack.length());

console.log(color.bgYellow('Getting index of 20'));
console.log(stack.search(20));

// Queue
//console.log(textQueue)
console.log(color.bgBlue('Printing queue status'));
console.log(queue.isEmpty() ? 'Is empty' : 'Is not empty');

console.log(color.bgCyan('Pushing 10, 20 and 30 into queue'));
queue.offer(10);
queue.offer(20);
queue.offer(30);


console.log(color.bgBlue('Printing queue status'));
console.log(queue.isEmpty() ? 'Is empty' : 'Is not empty');

console.log(color.bgGreen('Getting queue size'));
console.log(queue.length());

console.log(color.bgMagenta('Printing first element'));
console.log(queue.peek());

console.log(color.bgRed('Getting first element'));
console.log(queue.poll());

console.log(color.bgGreen('Getting new queue size'));
console.log(queue.length());

console.log(color.bgYellow('Getting index of 20'));
console.log(queue.search(20));

