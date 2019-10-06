const express = require("express");
const mongoose = require("mongoose");
const web3 = require("web3");
const routes = require("./routes");
require("dotenv").config();

const app = express();
web3js = new web3(
  new web3.providers.WebsocketProvider(
    `http://ropsten.infura.io/v3/${process.env.API_KEY}`
  )
);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSW}@blockchainproject-mzfxi.mongodb.net/project?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", async (req, res) => {
  return res.json({ ok: "ok" });
});

app.use(express.json());
app.use(routes);
app.listen(3333);
