const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Trung Hoang')
    } else {
        res.end(`<a href='/'>Back to home</a>`)
    }
})

server.listen(5001)