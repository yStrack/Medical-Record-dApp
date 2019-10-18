const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config();

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSW}@blockchainproject-mzfxi.mongodb.net/project?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
