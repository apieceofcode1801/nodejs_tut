const express = require('express')
const app = express()
const logger = require('./logger')
const authorized = require('./authorize')
const morgan = require('morgan')

// app.use('/api', [logger, authorized])
// app.use('/', logger)
// app.use('/', express.static('./public'))
app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.send('<h1>Home</h1><a href="./about">About</a>')
})

app.get('/api', (req, res) => {
    res.send(req.user)
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001...');
})