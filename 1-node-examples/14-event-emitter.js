const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data) => {
    console.log(`data received ${data}`);
})

customEmitter.emit('response', 'hello')

customEmitter.on('response', (data) => {
    console.log(`data received 1 ${data}`);
})


customEmitter.on('response', (data) => {
    console.log(`data received 2 ${data}`);
})