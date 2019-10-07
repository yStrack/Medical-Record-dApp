const express = require("express");
const SessionController = require("./controllers/SessionController");
const DashboardController = require("./controllers/DashboardController");

const routes = express.Router();

routes.post("/register", SessionController.store);
routes.post("/login", SessionController.authenticate);
routes.get("/dashboard", DashboardController.show);
module.exports = routes;
