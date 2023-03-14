const express = require("express");
const PORT = 8000;
const nigeria = require("./data/nigeria.json");
const canada = require("./data/canada.json");
const argentina = require("./data/argentina.json");
const southAfrica = require("./data/southAfrica.json");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/nigeria/:ng", (req, res) => {
  const ng = Number(req.params.ng);
  const postal = nigeria.find((code) => code.postalCode === ng);
  if (postal) {
    return res.json(postal);
  } else {
    return res.status(404).send("error: invalid postal code");
  }
});
app.get("/canada/:ca", (req, res) => {
  const ca = Number(req.params.ca);
  const postal = canada.find((code) => code["Postal Code"] === ca);
  if (postal) {
    return res.json(postal);
  } else {
    return res.status(404).send("error: invalid postal code");
  }
});
app.get("/argentina/:ar", (req, res) => {
  const ar = Number(req.params.ar);
  const postal = argentina.find((code) => code["Postal Code"] === ar);
  if (postal) {
    return res.json(postal);
  } else {
    return res.status(404).send("error: invalid postal code");
  }
});
app.get("/southAfrica/:sa", (req, res) => {
  const sa = Number(req.params.sa);
  const postal = southAfrica.find((code) => code["Postal Code"] === sa);
  if (postal) {
    return res.json(postal);
  } else {
    return res.status(404).send("error: invalid postal code");
  }
});

app.listen(PORT, () => console.log(`Running on Port ${PORT} go catch yay!!!`));
