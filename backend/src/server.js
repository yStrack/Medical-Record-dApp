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

/*
web3js = new web3(
  new web3.providers.HttpProvider(
    `ropsten.infura.io/v3/b6e273fcbc1c43d7a2d74779c9dde44c`
  )
);

const PatientRecord = new web3js.eth.Contract(contractABI, contractAddress);
*/
