const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.end(homePage)
    } else if (url === '/about') {

        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<h1>Hoang Trung')
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end('Page not found')
    }
})

server.listen(5001)