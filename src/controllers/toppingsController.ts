import { getRepository } from 'typeorm'
import { Topping } from '../database/entity/Topping'

async function getAllToppings(req, res) {
    let searchString = req.query.searchString ? req.query.searchString : ''
    let toppings = await getRepository(Topping)
        .createQueryBuilder('toppings')
        .getMany()
    if (searchString != '') {
        toppings = toppings.filter(topping =>
            topping.name.includes(searchString),
        )
    }

    res.json(toppings)
}

export { getAllToppings }
