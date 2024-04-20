const fs = require('node:fs');
const path = require('node:path');

const targetFile = path.resolve(__dirname, 'notes.txt');
// const targetFile = './notes.txt';

try {
  const data = fs.readFileSync(targetFile, 'utf-8');
  console.info(data);
} catch (error) {
  console.info('Gagal membaca berkas');
}
