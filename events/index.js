const { EventEmitter } = require('node:events');
const process = require('node:process');

const myEmitter = new EventEmitter();

const name = process.argv[2];

const birthdayEventListener = (name) => {
  console.info(`Happy birthday ${name}!`);
}

myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', name);
