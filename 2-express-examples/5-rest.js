const express = require('express')
const app = express()
const path = require('path')

let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
    // parse form data
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, people: [...people.map((p) => p.name), name] })
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((p) => p.id === Number(id))

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    res.status(200).json({ success: true, data: people })
})

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params

    const person = people.find((p) => p.id === Number(id))

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` })
    }



    const newPeople = people.filter((p) => p.id !== Number(id))

    res.status(200).json({ success: true, data: newPeople })
})

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.sendFile(path.resolve(__dirname, './methods-public/index.html'))
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001...');
})