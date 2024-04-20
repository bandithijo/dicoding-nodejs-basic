const fs = require('node:fs');
const path = require('node:path');

const targetFile = path.resolve(__dirname, 'article.txt');
// const targetFile = './article.txt'

const readableStream = fs.createReadStream(targetFile, { highWaterMark: 10 });

readableStream.on('readable', () => {
  setTimeout(() => {
    process.stdout.write(`[${readableStream.read()}]`);
  }, 1000);
})

readableStream.on('end', () => {
  console.info('Done');
})

readableStream.on('error', (error) => {
  console.error('Error:', error.message);
})

readableStream.emit('readable', targetFile);
