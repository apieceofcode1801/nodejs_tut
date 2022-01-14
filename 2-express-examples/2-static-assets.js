const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        'id': 1
    })
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001...');
})