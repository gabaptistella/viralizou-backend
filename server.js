const express = require("express");
const app = express();

// middleware (opcional mas bom já ter)
app.use(express.json());

// rota principal (teste)
app.get("/", (req, res) => {
  res.status(200).send("Viralizou backend rodando 🚀");
});

// rota healthcheck (pra garantir que Railway reconhece)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// 🔥 MUITO IMPORTANTE (porta dinâmica do Railway)
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
