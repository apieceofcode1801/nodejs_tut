const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 30000
})

stream.on('data', (result) => {
    console.log(`received ${result.length} `);
})

stream.on('error', (err) => {
    console.log(err);
})