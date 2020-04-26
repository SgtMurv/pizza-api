import { getRepository } from 'typeorm' // allows us access to the connection object even though we are in a different file
import { Pizza } from '../database/entity/Pizza'
import { Topping } from '../database/entity/Topping'

// returns all of the pizza data where the name contains the value in the optional search string parameter
async function getAllPizza(req, res) {
    let searchString = req.query.searchString ? req.query.searchString : ''
    let pizzas = await getRepository(Pizza)
        .createQueryBuilder('pizza')
        .leftJoinAndSelect('pizza.toppings', 'toppings')
        .getMany()
    if (searchString != '') {
        pizzas = pizzas.filter(pizza => pizza.name.includes(searchString))
    }

    res.json(pizzas)
}

async function addNewPizza(req, res) {
    const pizzaRepository = await getRepository(Pizza)
    const pizzaDataFromClient = req.body

    // save all of the toppings to the database
    let toppings = []
    for (let t of pizzaDataFromClient.toppings) {
        let newTopping = new Topping()
        newTopping.name = t.name
        newTopping.image = t.image
        await getRepository(Topping).save(newTopping)
        toppings.push(newTopping)
    }

    // reference the toppings from the newPizza object and save that pizza to the db
    const newPizza = new Pizza()
    newPizza.name = pizzaDataFromClient.name
    newPizza.toppings = toppings
    await pizzaRepository.save(newPizza)
    console.log(`${newPizza.name} has been added to the database! :)`)
    res.send(`Adding ${newPizza.name} to the database...`)
}

export { getAllPizza, addNewPizza }
