const authorized = (req, res, next) => {
    const { user } = req.query
    if (user === 'me') {
        req.user = { name: 'Trung', id: 1 }
        next()
    } else {
        res.status(402).send('Unauthorized')
        next()
    }
}

module.exports = authorized