const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes/index')

// we have all of the routes taken care of in the js files in the routes folder but we need to tell express to use the routes there
app.use('/',routes)

app.listen(PORT, () => console.log(`Your 🍕 pizza API is running on port ${PORT}!`))
