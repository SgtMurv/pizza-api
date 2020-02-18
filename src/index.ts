const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes/index')

// connect to the database

// let express know for all enpoints, look at the routes module.
app.use('/', routes)

app.listen(PORT, () =>
    console.log(`Your 🍕 pizza API is running on port ${PORT}!`),
)
