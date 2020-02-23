import * as express from 'express'
const router = express.Router()
import * as pizzaController from '../controllers/pizzaController'

router.get('/pizzas', pizzaController.getAllPizza)

// Safety route here so that you can send over some helpful data to represent a resource not found error
router.get('/*', (req, res) => res.send('404 -> Resource not found'))

export default router
