const express = require('express')

const path = require('path')
const router = express.Router()

router.post('/', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.sendFile(path.resolve(__dirname, '../methods-public/index.html'))
})

module.exports = router