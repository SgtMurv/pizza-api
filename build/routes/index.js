"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var pizzaController = require('../controllers/pizzaController');
router.get('/pizzas', pizzaController.getAllPizza);
// Safety route here so that you can send over some helpful data to represent a resource not found error
router.get('/*', function (req, res) { return res.send('404 -> Resource not found'); });
exports.default = router;
//# sourceMappingURL=index.js.map