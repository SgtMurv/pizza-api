import { getConnection } from 'typeorm' // allows us access to the connection object even though we are in a different file
import { Pizza } from '../database/entity/Pizza'

async function getAllPizza(req, res) {
    const pizza = await getConnection()
        .getRepository(Pizza)
        .find()
    res.json(pizza)
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
