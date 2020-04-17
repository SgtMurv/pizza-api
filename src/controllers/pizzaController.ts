import { getConnection } from 'typeorm' // allows us access to the connection object even though we are in a different file
import { Pizza } from '../database/entity/Pizza'

// returns all of the pizza data where the name contains the value in the optional search string parameter
async function getAllPizza(req, res) {
    let searchString = req.query.searchString ? req.query.searchString : ''
    let pizzas = await getConnection()
        .getRepository(Pizza)
        .find()
    if (searchString != '') {
        pizzas = pizzas.filter(pizza => pizza.name.includes(searchString))
    }

    res.json(pizzas)
}

async function addNewPizza(req, res) {
    const pizzaRepository = await getConnection().getRepository(Pizza)
    const pizzaDataFromClient = req.body
    const newPizza = new Pizza()
    newPizza.name = pizzaDataFromClient.name
    await pizzaRepository.save(newPizza)
    console.log(`${newPizza.name} has been added to the database! :)`)
    res.send(`Adding ${newPizza.name} to the database...`)
}

export { getAllPizza, addNewPizza }
