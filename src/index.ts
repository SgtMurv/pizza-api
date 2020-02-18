import express = require('express')
import routes from './routes/index'
import 'reflect-metadata'
import { createConnection, getRepository } from 'typeorm'
import { Pizza } from './database/entity/Pizza'

const app = express()
const PORT = 3000

// dummy methods for messing with the database:
async function addPizza(pizza, connection) {
    await connection.manager.save(pizza)
    console.log('A new pizza has been saved!')
}

// todo: connect to the database
createConnection()
    .then(async connection => {
        // here you have confirmed that you are connected to the database and can start to work with your entities.
        console.log('Connected To the Database!!')
        // retrieving all pizza from the db.
        let pizzaRepository = getRepository(Pizza)
        let p = await pizzaRepository.findOne({ name: 'Veggie' }) //this will find the first entry that matches the conditions
        p.name = 'New Pizza'
        await pizzaRepository.save(p)

        let [pizzas, count] = await pizzaRepository.findAndCount()
        console.log('Pizza List:')
        console.log(pizzas)
        console.log(`Number of pizzas: ${count}`)
    })
    .catch(error => {
        console.log(error)
    })

// // let express know for all enpoints, look at the routes module.
// app.use('/', routes)

// app.listen(PORT, () =>
//     console.log(`Your 🍕 pizza API is running on port ${PORT}!`),
// )
