const express = require("express");
const app = express();
const port = 3000;

// routes / URL / Endpoint utama kita method GET
app.get("/", (req, res) => {
  res.send("Utama");
});
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.post("/login", (req, res) => {
  if (req.name === "alwi") {
    res.send("login berhasil");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
