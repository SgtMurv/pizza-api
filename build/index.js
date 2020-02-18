"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var index_1 = require("./routes/index");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Pizza_1 = require("./database/entity/Pizza");
var app = express();
var PORT = 3000;
// todo: connect to the database
typeorm_1.createConnection()
    .then(function (connection) {
    // here you have confirmed that you are connected to the database and can start to work with your entities.
    console.log('Connected To the Database!!');
    // testing to see whether we can add entries into the database
    var hawaian = new Pizza_1.Pizza();
    return connection.manager
        .save(hawaian)
        .then(function (savedPizza) {
        return console.log("The " + savedPizza.name + " pizza has been saved!");
    });
})
    .catch(function (error) {
    console.log(error);
});
// let express know for all enpoints, look at the routes module.
app.use('/', index_1.default);
app.listen(PORT, function () {
    return console.log("Your \uD83C\uDF55 pizza API is running on port " + PORT + "!");
});
//# sourceMappingURL=index.js.map