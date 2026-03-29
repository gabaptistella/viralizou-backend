const express = require("express");
const app = express();

// rota simples
app.get("/", (req, res) => {
  res.send("Viralizou backend rodando 🚀");
});

// 🔥 IMPORTANTE (compatível com Railway e local)
const PORT = process.env.PORT || 3000;

// escutar na porta correta
app.listen(PORT, "0.0.0.0", () => {
  console.log("Rodando na porta " + PORT);
});
