const fs = require('fs');

const rs = fs.createReadStream('./files/starter.txt', { encoding: 'utf-8' });

const ws = fs.createWriteStream('./files/new-starter.txt')

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws)