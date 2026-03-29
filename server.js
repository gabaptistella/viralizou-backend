const express = require("express");
const app = express();

app.use(express.json());

// rota teste
app.get("/", (req, res) => {
  res.send("API Viralizou rodando 🚀");
});

// IMPORTANTE: usar PORT do Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server rodando na porta " + PORT);
});
