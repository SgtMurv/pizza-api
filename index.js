const express = require('express')
const app = express()
const port = 3000

function getPizzas(req,res){
	res.send('Getting all Pizza!')
}

app.get('/pizzas', (req,res)=>getPizzas(req,res))

app.get('/*', (req,res)=>res.send('404 -> Resource not found'))

app.listen(port, () => console.log(`Your 🍕 pizza API is running on port ${port}!`))
