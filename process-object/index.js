const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1
const yourName = process.argv[2]; // TODO 2
const environment = process.env.NODE_ENV; // TODO 3

for (let i = 0; i <= 10_000; i++) {
  // Proses looping ini akan membuat penggunaan memory naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // TODO 4

console.info(`Hai, ${yourName}`);
console.info(`Mode environment: ${environment}`);
console.info(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);




// $ NODE_ENV=development node ./process-object/index.js "Rizqi"
// Hai, Rizqi
// Mode environment: development
// Penggunaan memori dari 2933512 naik ke 2935264
