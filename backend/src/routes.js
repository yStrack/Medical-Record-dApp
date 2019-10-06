const express = require("express");
const SessionController = require("./controllers/SessionController");
const ContractController = require("./controllers/ContractController");

const routes = express.Router();

routes.post("/register", SessionController.store);
routes.get("/patients/:id", ContractController.show);

module.exports = routes;
