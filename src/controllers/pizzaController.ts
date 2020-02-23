import { getConnection } from 'typeorm' // allows us access to the connection object even though we are in a different file
import { Pizza } from '../database/entity/Pizza'

async function getAllPizza(req, res) {
    const pizza = await getConnection()
        .getRepository(Pizza)
        .find()
    res.json(pizza)
}

export { getAllPizza }
