import * as express from 'express'
const router = express.Router({ mergeParams: true })
import * as pizzaController from '../controllers/pizzaController'
import * as toppingsController from '../controllers/toppingsController'

router.get('/pizzas', pizzaController.getAllPizza)
router.post('/pizzas', pizzaController.addNewPizza)
router.get('/toppings', toppingsController.getAllToppings)

// Safety route here so that you can send over some helpful data to represent a resource not found error
router.get('/*', (req, res) => res.send('404 -> Resource not found'))

export default router
