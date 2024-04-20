const fs = require('node:fs');
const path = require('node:path');

const readFile = path.resolve(__dirname, 'input.txt');
const writeFile = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(readFile, { highWaterMark: 15 });
const writeableStream = fs.createWriteStream(writeFile);

readableStream.on('readable', () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.error('Error:', error.message);
  }
})

readableStream.on('end', () => {
  writeableStream.end();
})

readableStream.on('error', (error) => {
  console.error('Error:', error.message);
})
