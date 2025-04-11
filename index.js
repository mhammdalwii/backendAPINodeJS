const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connect.js");
const response = require("./response.js");

// routes / URL / Endpoint utama kita method GET

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/mahasiswa", (req, res) => {
  res.send("Hello mahasisawa");
});

app.get("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  res.send(`spesifik mahasiswa dengan id ${nim}`);
});

app.post("/mahasiswa", (req, res) => {
  res.send("ini posting");
});

app.put("/mahasiswa", (req, res) => {
  res.send("ini update");
});

app.delete("/mahasiswa", (req, res) => {
  res.send("ini delete");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
