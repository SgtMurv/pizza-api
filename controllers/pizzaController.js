const pizza_data = require('../pizza-data')

exports.getAllPizza = (req, res)=>{
	res.json(pizza_data)
}