const express = require("express");
const SessionController = require("./controllers/SessionController");
const DashboardController = require("./controllers/DashboardController");
const Migrations = require("./migrations/migrations");
const EnterpriseController = require("./controllers/EnterpriseController");
const routes = express.Router();

routes.post("/register", SessionController.store);
routes.post("/login", SessionController.authenticate);
routes.get("/migrate", Migrations.updateToNewSchema);
routes.get("/dashboard", DashboardController.show);
routes.post("/dashboard/updateAuth", DashboardController.addAuth);
routes.post("/dashboard/removeAuth", DashboardController.removeAuth);
routes.get("/enterprise", EnterpriseController.authorizedHospitals);

module.exports = routes;
