const fs = require('node:fs');
const path = require('node:path');

const fileReadCallback = (error, data) => {
  if (error) {
    console.info('Gagal membaca berkas');
    return;
  }

  console.info(data);
}

const targetFile = path.resolve(__dirname, 'notes.txt');
// const targetFile = './notes.txt';

fs.readFile(targetFile, 'utf-8', fileReadCallback);
