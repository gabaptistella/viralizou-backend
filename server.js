const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Viralizou backend rodando 🚀");
});

// 🔥 ISSO É O MAIS IMPORTANTE
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Rodando na porta " + PORT);
});
