const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.listen(3333);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSW}@blockchainproject-mzfxi.mongodb.net/project?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(routes);
