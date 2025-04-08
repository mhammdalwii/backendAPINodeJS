const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connect.js");
const response = require("./response.js");

// routes / URL / Endpoint utama kita method GET

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const sql = "SELECT * FROM mhs";
  db.query(sql, (err, result) => {
    // hasil data dari mysql
    response(200, result, "berhasil", res);
  });
});
app.get("/find", (req, res) => {
  const sql = `SELECT nama_lengkap FROM mhs WHERE nim = ${req.query.nim}`;
  db.query(sql, (err, result) => {
    response(200, result, "berhasil", res);
  });
});
app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("login berhasil");
});

app.put("/update", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
