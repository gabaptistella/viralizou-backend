const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Viralizou backend rodando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Rodando na porta " + PORT);
});
